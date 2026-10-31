import { Order } from '../types/order';
import { STORE_LOCATION } from '../data/locationData';

export const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

export const generateWhatsAppMessage = (order: Order): string => {
  const lines: string[] = [];

  lines.push('☕ *NEW BREW & BITE ORDER* 🥐');
  lines.push(`*Order Ref:* #${order.id}`);
  lines.push(`*Date:* ${new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
  lines.push('');
  lines.push('👤 *CUSTOMER DETAILS*');
  lines.push(`• Name: ${order.customer.name}`);
  lines.push(`• Phone: ${order.customer.phone}`);
  
  if (order.pickup.type === 'table') {
    lines.push(`📍 *Pickup Mode:* Table Pickup (Table #${order.pickup.tableNumber || 'N/A'})`);
  } else {
    lines.push(`🛍️ *Pickup Mode:* Takeaway (Est. Time: ${order.pickup.pickupTime || 'As soon as possible'})`);
  }

  lines.push('');
  lines.push('📋 *ORDER ITEMS*');

  order.items.forEach((item, index) => {
    const opts: string[] = [];
    if (item.selectedOptions.size) opts.push(item.selectedOptions.size.name);
    if (item.selectedOptions.milk) opts.push(item.selectedOptions.milk.name);
    if (item.selectedOptions.sugar) opts.push(item.selectedOptions.sugar.name);
    if (item.selectedOptions.extras && item.selectedOptions.extras.length > 0) {
      item.selectedOptions.extras.forEach(e => opts.push(`+${e.name}`));
    }
    
    const optionsStr = opts.length > 0 ? ` _(${opts.join(', ')})_` : '';
    lines.push(`${index + 1}. *${item.quantity}x ${item.product.name}*${optionsStr} — ${formatCurrency(item.totalPrice)}`);
  });

  if (order.customer.notes) {
    lines.push('');
    lines.push(`📝 *Special Instructions:* ${order.customer.notes}`);
  }

  lines.push('');
  lines.push('-----------------------------');
  lines.push(`Subtotal: ${formatCurrency(order.subtotal)}`);
  lines.push(`Tax (8%): ${formatCurrency(order.tax)}`);
  lines.push(`💰 *TOTAL DUE ON PICKUP: ${formatCurrency(order.totalAmount)}*`);
  lines.push('-----------------------------');
  lines.push('💳 *Payment:* Pay at Table / Counter upon receipt.');
  lines.push('Thank you for choosing Brew & Bite!');

  return lines.join('\n');
};

export const getWhatsAppUrl = (order: Order, overridePhone?: string): string => {
  const phone = overridePhone || STORE_LOCATION.whatsappPhone;
  const message = generateWhatsAppMessage(order);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

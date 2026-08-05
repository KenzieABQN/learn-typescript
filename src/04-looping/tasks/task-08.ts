import { PathOrFileDescriptor } from "fs";

/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let ordersReadyToShip: number = 0
let unpaidOrders: number = 0
let ordersWaitingForStock: number = 0

for (let i = 0; i < orders.length; i++) {
  if (orders[i].stockAvailable && orders[i].paid) {
    ordersReadyToShip++
  } else if (!orders[i].paid) {
    unpaidOrders++
  } else {
    ordersWaitingForStock++
  }
}

console.log(`Amount of orders ready to Ship: ${ordersReadyToShip}`)
console.log(`Unpaid Orders: ${unpaidOrders}`)
console.log(`Orders waiting for stock: ${ordersWaitingForStock}`)

console.log(`-------`)

console.log(`IDs that are ready to ship:`)

for(let i = 0; i < orders.length; i++) {
  if(orders[i].stockAvailable && orders[i].paid) {
    console.log(orders[i].id);
  }
}
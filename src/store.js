'use strict';
const fs = require('node:fs'); const path = require('node:path'); const { products, packages, regions, busCompanies } = require('./catalog');
const file = process.env.DATA_FILE || path.join(process.cwd(), 'data', 'neurototoinsight.json');
function seed() { return { products, packages, regions, busCompanies, orders: [], assessments: [], appointments: [], handoffs: [], conversations: [] }; }
function read() { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { const d = seed(); write(d); return d; } }
function write(data) { fs.mkdirSync(path.dirname(file), { recursive: true }); const temp = `${file}.tmp`; fs.writeFileSync(temp, JSON.stringify(data, null, 2)); fs.renameSync(temp, file); }
function mutate(fn) { const d = read(); const result = fn(d); write(d); return result; }
function newOrder(input) { return mutate(d => { const id = `NTI-${String(d.orders.length + 1).padStart(4, '0')}`; const order = { ...input, id, paymentStatus: 'PENDING', createdAt: new Date().toISOString(), paymentProof: null, paidAt: null }; d.orders.push(order); return order; }); }
module.exports = { read, mutate, newOrder };

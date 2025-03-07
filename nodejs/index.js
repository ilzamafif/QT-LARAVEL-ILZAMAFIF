// Data 
const customers = [
  { "id": 1, "name": "Alice", "age": 25, "city": "Jakarta", "spent": 1500000 },
  { "id": 2, "name": "Bob", "age": 30, "city": "Surabaya", "spent": 2500000 },
  { "id": 3, "name": "Charlie", "age": 28, "city": "Bandung", "spent": 1200000 },
  { "id": 4, "name": "David", "age": 35, "city": "Jakarta", "spent": 3000000 },
  { "id": 5, "name": "Eve", "age": 22, "city": "Surabaya", "spent": 1000000 }
];

// 1. **Sorting:** Urutkan data pelanggan berdasarkan **spent (jumlah uang yang dihabiskan) secara descending**.
customers.sort((a, b) => b.spent - a.spent);

// 2. **Filtering:** Ambil hanya pelanggan yang **berusia di atas 25 tahun dan berasal dari Jakarta**.
const filter = customers.filter((customer) => customer.age >= 25 && customer.city == "Jakarta")

// 3. **Transformasi:** Ubah format data menjadi array baru hanya dengan kolom **id, name, dan total spent (dalam juta rupiah)**.
const transformasi = filter.map((customer) => ({
  id: customer.id,
  name: customer.name,
  total_spent: `${customer.spent / 1000000} Juta`,
}));

console.log(JSON.stringify(transformasi));
Quick Test : Laravel & Node.js 

Durasi: 60 menit

Tujuan: Menguji kemampuan kandidat dalam memproses data menggunakan PHP dan NodeJs.

Studi Kasus:

Anda memiliki kumpulan data pelanggan dalam bentuk array, dan diminta untuk melakukan sorting, filtering, dan transformasi berdasarkan kriteria tertentu dengan menggunakan PHP dan NodeJs.

data pelanggan yang akan diproses:
PHP : 

```
[
["id" => 1, "name" => "Alice", "age" => 25, "city" => "Jakarta", "spent" => 1500000],
["id" => 2, "name" => "Bob", "age" => 30, "city" => "Surabaya", "spent" => 2500000],
["id" => 3, "name" => "Charlie", "age" => 28, "city" => "Bandung", "spent" => 1200000],
["id" => 4, "name" => "David", "age" => 35, "city" => "Jakarta", "spent" => 3000000],
["id" => 5, "name" => "Eve", "age" => 22, "city" => "Surabaya", "spent" => 1000000]
];

```
Node js :
```
[
{ "id": 1, "name": "Alice", "age": 25, "city": "Jakarta", "spent": 1500000 },
{ "id": 2, "name": "Bob", "age": 30, "city": "Surabaya", "spent": 2500000 },
{ "id": 3, "name": "Charlie", "age": 28, "city": "Bandung", "spent": 1200000 },
{ "id": 4, "name": "David", "age": 35, "city": "Jakarta", "spent": 3000000 },
{ "id": 5, "name": "Eve", "age": 22, "city": "Surabaya", "spent": 1000000 }
]
```

Tugas:

- Sorting: Urutkan data pelanggan berdasarkan spent (jumlah uang yang dihabiskan) secara descending.
- Filtering: Ambil hanya pelanggan yang berusia di atas 25 tahun dan berasal dari Jakarta.
- Transformasi: Ubah format data menjadi array baru hanya dengan kolom id, name, dan total spent (dalam juta rupiah).
Expected Output (Setelah Sorting, Filtering, dan Transformasi):

```
[
{ "id": 4, "name": "David", "total_spent": "3 juta" },
{ "id": 1, "name": "Alice", "total_spent": "1.5 juta" }
]
```


Penilaian

- Akurasi hasil (Sorting, filtering, transformasi sesuai spesifikasi) (40%)
- Kualitas kode (Rapi, efisien, mudah dibaca) (30%)
- Pemahaman struktur data (Pemanfaatan array & fungsi bawaan) (30%)

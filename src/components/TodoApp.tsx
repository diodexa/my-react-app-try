import { useState } from "react";

export default function DatalistExample() {
  const data = [
    {
        id : 1,
        Judul : "Harry Potter",
        Genre : "fiksi",
        ratting : 8
    },
    {
        id : 2,
        Judul : "Power Ranger",
        Genre : "Anak-anak",
        ratting : 6
    },
    {
        id : 3,
        Judul : "The Law of Ueki",
        Genre : "Politik",
        ratting : 8
    },
    {
        id : 4,
        Judul : "Avenger",
        Genre : "Action",
        ratting : 9
    },
    {
        id : 5,
        Judul : "Hantu Gayung",
        Genre : "Horor",
        ratting : 1
    }

  ];

  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(null);

  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    // TODO:
    // 1. cari data yang name-nya sama dengan input
    // 2. kalau ada → setSelected(data)
    // 3. kalau ga ada → setSelected(null)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Datalist React</h2>

      <input
        list="myList"
        value={input}
        onChange={handleChange}
        placeholder="Pilih item..."
      />

      <datalist id="myList">
        {/* TODO: loop data untuk membuat option */}
      </datalist>

      <div style={{ marginTop: 20 }}>
        {/* TODO: tampilkan detail data terpilih */}
      </div>
    </div>
  );
}


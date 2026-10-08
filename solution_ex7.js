const rooms = [
    {
        roomId: "P101",
        roomType: "Standard",
        pricePerNight: 1000000,
        status: "VACANT"
    },
    {
        roomId: "P102",
        roomType: "Deluxe",
        pricePerNight: 2000000,
        status: "OCCUPIED"
    },
    {
        roomId: "P103",
        roomType: "Standard",
        pricePerNight: 1000000,
        status: "VACANT"
    }
];

console.log("===== DANH SÁCH BAN ĐẦU =====");
for (let room of rooms) {
    console.log(room);
}

rooms.push({
    roomId: "P104",
    roomType: "VIP Suite",
    pricePerNight: 3500000,
    status: "VACANT"
});

console.log("===== SAU KHI THÊM P104 =====");
for (let room of rooms) {
    console.log(room);
}

let index = rooms.findIndex(room => room.roomId === "P101");
if (index !== -1) {
    rooms[index].status = "OCCUPIED";
}

console.log("===== SAU KHI CẬP NHẬT P101 =====");
for (let room of rooms) {
    console.log(room);
}

index = rooms.findIndex(room => room.roomId === "P103");
if (index !== -1) {
    rooms.splice(index, 1);
}

console.log("===== SAU KHI XÓA P103 =====");
console.table(rooms);
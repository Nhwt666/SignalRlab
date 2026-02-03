// 1️⃣ Tạo connection
const connection = new signalR.HubConnectionBuilder()
    .withUrl("/signalrServer")
    .withAutomaticReconnect()
    .build();

// 2️⃣ LẮNG NGHE EVENT (GẮN Ở ĐÂY)
connection.on("ProductsChanged", function () {
    const path = window.location.pathname.toLowerCase();

    if (path === "/" || path.startsWith("/products")) {
        console.log("Reload products page");
        location.reload();
    }
});

// 3️⃣ Start connection (LUÔN để CUỐI)
connection.start()
    .then(() => console.log("SignalR connected"))
    .catch(err => console.error(err));

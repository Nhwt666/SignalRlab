const connection = new signalR.HubConnectionBuilder()
    .withUrl("/signalrServer")
    .build();

connection.on("ProductsChanged", function () {
    const path = window.location.pathname.toLowerCase();

    // Chỉ reload khi đang ở trang Index
    if (path === "/products" || path === "/products/index") {
        location.reload();
    }
});

connection.start()
    .then(() => console.log("SignalR connected"))
    .catch(err => console.error(err));

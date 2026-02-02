using Microsoft.AspNetCore.SignalR;

namespace SignalRLab.Hubs
{
    public class SignalRServer : Hub
    {
        public async Task NotifyProductsChanged()
        {
            await Clients.All.SendAsync("ProductsChanged");
        }
    }
}
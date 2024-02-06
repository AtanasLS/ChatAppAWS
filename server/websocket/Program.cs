using Fleck;

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

var server = new WebSocketServer("ws://0.0.0.0:8181");

var wsConnections = new List<IWebSocketConnection>();

server.Start(socket =>
{

    socket.OnOpen = () =>
    {
        wsConnections.Add(socket);
    };

    socket.OnMessage = message =>
    {
        foreach (var wsConn in wsConnections)
        {
            
            wsConn.Send(message);
            if (wsConn.ConnectionInfo != socket.ConnectionInfo)
            {
                
            }
        }
    };

});

Console.ReadLine();

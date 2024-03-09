using ChatAppServer.Models;
using System.Collections.Concurrent;

namespace ChatAppServer.DataService
{
	public class SharedDb
	{
		private readonly ConcurrentDictionary<string, UserConnection> _connections = new ConcurrentDictionary<string, UserConnection>();

		public ConcurrentDictionary<string, UserConnection> connections => _connections;
	}
}

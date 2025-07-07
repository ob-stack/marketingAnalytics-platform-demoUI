import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  MoreHorizontal,
  Search,
  User,
  Plus,
  Trash,
  Edit,
  Eye
} from 'lucide-react';

// Fake data for the client list
const clientsData = [
  {
    id: 1,
    name: 'Anton',
    email: 'anton@dev.com',
    company: 'Upwork.',
    status: 'Active',
    lastLogin: '3 hours ago',
    sources: ['Google Analytics', 'Shopify']
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@quantum.io',
    company: 'Quantum IO',
    status: 'Active',
    lastLogin: '1 day ago',
    sources: ['Google Analytics', 'Meta Ads', 'CSV']
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael@tekwise.com',
    company: 'TekWise',
    status: 'Inactive',
    lastLogin: '2 weeks ago',
    sources: ['Google Analytics']
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@globalretail.com',
    company: 'Global Retail',
    status: 'Active',
    lastLogin: '5 hours ago',
    sources: ['Shopify', 'Meta Ads', 'Klaviyo']
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david@suncoast.com',
    company: 'Suncoast Media',
    status: 'Pending',
    lastLogin: 'Never',
    sources: ['CSV']
  }
];

// Fake data for the data sources
const dataSources = [
  {
    id: 1,
    name: 'Google Analytics',
    type: 'API',
    status: 'Connected',
    lastSync: '10 minutes ago',
    clients: 24
  },
  {
    id: 2,
    name: 'Shopify',
    type: 'API',
    status: 'Connected',
    lastSync: '15 minutes ago',
    clients: 18
  },
  {
    id: 3,
    name: 'Meta Ads',
    type: 'API',
    status: 'Connected',
    lastSync: '30 minutes ago',
    clients: 15
  },
  {
    id: 4,
    name: 'Klaviyo',
    type: 'API',
    status: 'Connected',
    lastSync: '1 hour ago',
    clients: 12
  },
  {
    id: 5,
    name: 'CSV Import',
    type: 'File',
    status: 'Manual',
    lastSync: '1 day ago',
    clients: 8
  }
];

export function AdminPanel() {
  const [clients, setClients] = useState(clientsData);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleClientStatus = (clientId: number) => {
    setClients(
      clients.map((client) => {
        if (client.id === clientId) {
          const newStatus = client.status === 'Active' ? 'Inactive' : 'Active';
          return { ...client, status: newStatus };
        }
        return client;
      })
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Panel</h1>
        <p className="text-muted-foreground">
          Manage your clients and data connections.
        </p>
      </div>

      <Tabs defaultValue="clients" className="w-full">
        <TabsList>
          <TabsTrigger value="clients">Client Management</TabsTrigger>
          <TabsTrigger value="datasources">Data Sources</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-4">
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search clients..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="flex items-center gap-1">
                <Plus size={16} /> Add New Client
              </Button>
            </div>

            <div className="overflow-hidden rounded-lg border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="py-3 px-4 text-left">Client</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left hidden lg:table-cell">
                      Data Sources
                    </th>
                    <th className="py-3 px-4 text-left hidden md:table-cell">
                      Last Login
                    </th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="border-b">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {client.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{client.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {client.company}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={client.status === 'Active'}
                            onCheckedChange={() =>
                              toggleClientStatus(client.id)
                            }
                          />
                          <Badge
                            variant={
                              client.status === 'Active'
                                ? 'default'
                                : 'secondary'
                            }
                          >
                            {client.status}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-3 px-4 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {client.sources.map((source, i) => (
                            <Badge key={i} variant="outline">
                              {source}
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">
                        {client.lastLogin}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Eye className="h-4 w-4" /> View
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center gap-2">
                              <Edit className="h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="flex items-center gap-2 text-red-600 focus:text-red-600">
                              <Trash className="h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredClients.length === 0 && (
                <div className="p-8 text-center">
                  <p className="text-muted-foreground">No clients found</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredClients.length} of {clients.length} clients
              </p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="datasources" className="space-y-4">
          <Card className="p-6">
            <div className="flex justify-between mb-6">
              <h3 className="text-lg font-medium">Connected Data Sources</h3>
              <Button>Add New Source</Button>
            </div>

            <div className="overflow-hidden rounded-lg border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="py-3 px-4 text-left">Source</th>
                    <th className="py-3 px-4 text-left">Type</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left hidden md:table-cell">
                      Last Sync
                    </th>
                    <th className="py-3 px-4 text-left hidden md:table-cell">
                      Clients
                    </th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSources.map((source) => (
                    <tr key={source.id} className="border-b">
                      <td className="py-3 px-4 font-medium">{source.name}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline">{source.type}</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            source.status === 'Connected'
                              ? 'default'
                              : 'secondary'
                          }
                        >
                          {source.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">
                        {source.lastSync}
                      </td>
                      <td className="py-3 px-4 hidden md:table-cell">
                        {source.clients}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Configure</DropdownMenuItem>
                            <DropdownMenuItem>Sync Now</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 focus:text-red-600">
                              Disconnect
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Available Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'HubSpot', icon: '🟠' },
                { name: 'Mailchimp', icon: '🟡' },
                { name: 'QuickBooks', icon: '🔵' },
                { name: 'Slack', icon: '🟣' },
                { name: 'Stripe', icon: '🔵' },
                { name: 'Salesforce', icon: '🔵' },
                { name: 'Zapier', icon: '🟠' },
                { name: 'Zendesk', icon: '🟢' }
              ].map((integration, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 flex items-center justify-between hover:bg-muted/50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{integration.icon}</div>
                    <span>{integration.name}</span>
                  </div>
                  <Plus size={16} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Role Management</h3>

            <div className="overflow-hidden rounded-lg border mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="py-3 px-4 text-left">Role Name</th>
                    <th className="py-3 px-4 text-left">Users</th>
                    <th className="py-3 px-4 text-left hidden md:table-cell">
                      Description
                    </th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: 'Administrator',
                      users: 3,
                      desc: 'Full system access'
                    },
                    {
                      name: 'Manager',
                      users: 5,
                      desc: 'Can manage clients and view all data'
                    },
                    {
                      name: 'Client',
                      users: 22,
                      desc: 'Can only view assigned dashboards'
                    },
                    {
                      name: 'Guest',
                      users: 8,
                      desc: 'Limited view-only access'
                    }
                  ].map((role, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3 px-4 font-medium">{role.name}</td>
                      <td className="py-3 px-4">{role.users}</td>
                      <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">
                        {role.desc}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end">
              <Button>Create New Role</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Permission Matrix</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="py-3 px-4 text-left">Feature</th>
                    <th className="py-3 px-4 text-center">Administrator</th>
                    <th className="py-3 px-4 text-center">Manager</th>
                    <th className="py-3 px-4 text-center">Client</th>
                    <th className="py-3 px-4 text-center">Guest</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'View Dashboards',
                      admin: true,
                      manager: true,
                      client: true,
                      guest: true
                    },
                    {
                      feature: 'Edit Dashboards',
                      admin: true,
                      manager: true,
                      client: false,
                      guest: false
                    },
                    {
                      feature: 'Manage Users',
                      admin: true,
                      manager: true,
                      client: false,
                      guest: false
                    },
                    {
                      feature: 'Data Source Config',
                      admin: true,
                      manager: true,
                      client: false,
                      guest: false
                    },
                    {
                      feature: 'System Settings',
                      admin: true,
                      manager: false,
                      client: false,
                      guest: false
                    },
                    {
                      feature: 'Export Reports',
                      admin: true,
                      manager: true,
                      client: true,
                      guest: false
                    },
                    {
                      feature: 'API Access',
                      admin: true,
                      manager: true,
                      client: false,
                      guest: false
                    }
                  ].map((item, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3 px-4">{item.feature}</td>
                      <td className="py-3 px-4 text-center">
                        <Switch checked={item.admin} disabled />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Switch checked={item.manager} />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Switch checked={item.client} />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Switch checked={item.guest} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-4">
              <Button>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

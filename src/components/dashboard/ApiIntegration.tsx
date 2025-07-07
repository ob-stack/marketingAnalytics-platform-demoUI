
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Database, 
  Check, 
  AlertCircle, 
  RefreshCw, 
  Plus,
  Upload,
  FileSpreadsheet,
  FileJson,
  ChevronRight
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

// Define available integrations
const integrations = [
  { 
    id: 'google-analytics',
    name: 'Google Analytics', 
    icon: '🔍',
    status: 'connected',
    lastSync: '10 minutes ago',
    description: 'Website traffic, user behavior, and conversion metrics'
  },
  { 
    id: 'shopify',
    name: 'Shopify', 
    icon: '🛍️',
    status: 'connected',
    lastSync: '15 minutes ago',
    description: 'E-commerce orders, products, customers, and revenue data'
  },
  { 
    id: 'meta-ads',
    name: 'Meta Ads', 
    icon: '📱',
    status: 'connected',
    lastSync: '30 minutes ago',
    description: 'Facebook and Instagram ad campaigns, spend, and performance'
  },
  { 
    id: 'klaviyo',
    name: 'Klaviyo', 
    icon: '📧',
    status: 'error',
    lastSync: '1 day ago',
    description: 'Email marketing metrics, campaigns, and engagement analytics'
  },
  { 
    id: 'google-ads',
    name: 'Google Ads', 
    icon: '📊',
    status: 'not-connected',
    lastSync: 'Never',
    description: 'Ad campaigns, keywords, spend, and conversion data'
  },
];

export function ApiIntegration() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Data Integration</h1>
        <p className="text-muted-foreground">
          Connect and manage your data sources.
        </p>
      </div>

      <Tabs defaultValue="connections" className="w-full">
        <TabsList>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="csv">CSV Upload</TabsTrigger>
          <TabsTrigger value="api">API Configuration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="connections" className="space-y-4">
          <div className="grid grid-cols-1 gap-6">
            {integrations.map((integration) => (
              <Card key={integration.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">
                        {integration.icon}
                      </div>
                      <div>
                        <CardTitle>{integration.name}</CardTitle>
                        <CardDescription>{integration.description}</CardDescription>
                      </div>
                    </div>
                    <div>
                      <Badge
                        variant={
                          integration.status === 'connected'
                            ? 'default'
                            : integration.status === 'error'
                            ? 'destructive'
                            : 'outline'
                        }
                        className="flex items-center gap-1"
                      >
                        {integration.status === 'connected' && <Check className="h-3 w-3" />}
                        {integration.status === 'error' && <AlertCircle className="h-3 w-3" />}
                        {integration.status === 'connected' && 'Connected'}
                        {integration.status === 'error' && 'Error'}
                        {integration.status === 'not-connected' && 'Not Connected'}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {integration.status === 'connected' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Last synchronized</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm">{integration.lastSync}</p>
                          <Button size="icon" variant="outline" className="h-7 w-7">
                            <RefreshCw className="h-3.5 w-3.5" />
                            <span className="sr-only">Refresh</span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="outline">Configure</Button>
                        <Button variant="default">View Data</Button>
                      </div>
                    </div>
                  )}
                  
                  {integration.status === 'error' && (
                    <div className="space-y-3">
                      <div className="text-sm text-destructive">
                        Authorization error. Your access token has expired.
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline">View Details</Button>
                        <Button variant="default">Reconnect</Button>
                      </div>
                    </div>
                  )}

                  {integration.status === 'not-connected' && (
                    <div className="flex justify-end">
                      <Button>Connect</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            <Card className="border-dashed">
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Plus className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">Add New Integration</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Connect to additional data sources for your dashboard
                  </p>
                  <Button>Browse Integrations</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="csv" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>CSV Data Import</CardTitle>
              <CardDescription>
                Upload CSV files to import data for your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-6 border-dashed flex flex-col items-center justify-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">Upload File</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Drag and drop or click to upload CSV files
                  </p>
                  <Button className="relative">
                    Select File
                    <input type="file" className="absolute inset-0 opacity-0" />
                  </Button>
                </div>

                <div className="border rounded-lg p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Recent Uploads</h3>
                  {[
                    { name: 'sales_data_2023.csv', date: '2023-11-10', size: '1.2 MB' },
                    { name: 'customer_metrics.csv', date: '2023-11-05', size: '845 KB' },
                    { name: 'ad_performance.csv', date: '2023-10-28', size: '1.5 MB' },
                  ].map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b pb-2 last:border-0">
                      <div className="flex items-center space-x-3">
                        <FileSpreadsheet className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">File Mapping Options</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="headerRow" className="flex items-center space-x-2">
                      <span>First row contains headers</span>
                    </Label>
                    <Switch id="headerRow" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dateFormat" className="flex items-center space-x-2">
                      <span>Auto-detect date formats</span>
                    </Label>
                    <Switch id="dateFormat" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="nullValues" className="flex items-center space-x-2">
                      <span>Replace empty cells with NULL</span>
                    </Label>
                    <Switch id="nullValues" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Import & Process Data</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Custom API Integration</CardTitle>
              <CardDescription>
                Connect to any custom API endpoint to fetch data.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="api-url">API Endpoint URL</Label>
                  <Input id="api-url" placeholder="https://api.example.com/v1/data" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="auth-method">Authentication Method</Label>
                    <select id="auth-method" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>API Key</option>
                      <option>OAuth 2.0</option>
                      <option>Bearer Token</option>
                      <option>Basic Auth</option>
                      <option>No Authentication</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="method">Request Method</Label>
                    <select id="method" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>GET</option>
                      <option>POST</option>
                      <option>PUT</option>
                      <option>DELETE</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <div className="flex space-x-2">
                    <Input id="api-key" type="password" placeholder="Enter your API key" />
                    <Button variant="outline">Validate</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="headers">Headers</Label>
                  <Textarea
                    id="headers"
                    placeholder='{"Content-Type": "application/json"}'
                    className="font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="body">Request Body</Label>
                  <Textarea
                    id="body"
                    placeholder='{"query": "SELECT * FROM data"}'
                    className="font-mono text-sm"
                    rows={4}
                  />
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-2 bg-muted/50">
                <h4 className="text-sm font-semibold flex items-center">
                  <FileJson className="h-4 w-4 mr-2" />
                  Response Preview
                </h4>
                <div className="bg-background p-4 rounded-md">
                  <pre className="text-xs overflow-x-auto font-mono text-muted-foreground">
{`{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Sample Item",
      "value": 42
    },
    {
      "id": 2,
      "name": "Another Item",
      "value": 73
    }
  ]
}`}
                  </pre>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Data Mapping Progress</Label>
                  <span className="text-sm text-muted-foreground">2/3 fields mapped</span>
                </div>
                <Progress value={66} />
                <div className="flex justify-between">
                  <Button variant="ghost" className="text-sm flex items-center" size="sm">
                    <span>Configure Data Mapping</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline">Test Connection</Button>
                <Button>Save & Connect</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

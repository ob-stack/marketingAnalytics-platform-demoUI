
import React from 'react';
import { DraggableWidget } from '../DraggableWidget';
import { LineChart } from '../widgets/LineChart';
import { DonutChart } from '../widgets/DonutChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import { sampleMetricData } from '../data/chartData';

export const OrdersProductsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 grid grid-cols-1 gap-4">
        <DraggableWidget title="Monthly Revenue" dataSource="Shopify">
          <LineChart 
            data={sampleMetricData.monthlyRevenue}
            height={300}
            lines={[
              { key: 'value', color: '#3b82f6', name: 'Revenue ($)' },
            ]}
            dataSource="Shopify"
          />
        </DraggableWidget>
        <DraggableWidget title="Product Performance" dataSource="Shopify">
          <div className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-medium">Product</th>
                    <th className="text-right p-2 font-medium">Sales</th>
                    <th className="text-right p-2 font-medium">Revenue ($)</th>
                    <th className="text-right p-2 font-medium">Profit ($)</th>
                    <th className="text-right p-2 font-medium">Margin (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleMetricData.productPerformance.map((product) => (
                    <tr key={product.name} className="border-b hover:bg-muted/50">
                      <td className="text-left p-2 font-medium">{product.name}</td>
                      <td className="text-right p-2">{product.sales}</td>
                      <td className="text-right p-2">${product.revenue.toLocaleString()}</td>
                      <td className="text-right p-2">${product.profit.toLocaleString()}</td>
                      <td className="text-right p-2">{((product.profit / product.revenue) * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </DraggableWidget>
      </div>
      
      <div className="space-y-4">
        <DraggableWidget title="Recent Order Statuses" dataSource="Shopify">
          <DonutChart 
            data={sampleMetricData.recentOrderStatuses}
            height={200}
            centerLabel="Orders"
            dataSource="Shopify"
          />
        </DraggableWidget>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              Recent Sales
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 text-xs px-2 py-0.5">
                Shopify
              </Badge>
            </CardTitle>
            <CardDescription>Latest customer purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Users size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Customer {101 + i}</p>
                      <p className="text-xs text-muted-foreground">Order #{10045 + i}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">${(Math.random() * 100 + 50).toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(Date.now() - i * 3600000).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div className="pt-2 text-center">
                <Button variant="ghost" size="sm" className="w-full">
                  View All Orders
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              Popular Products
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 text-xs px-2 py-0.5">
                Shopify
              </Badge>
            </CardTitle>
            <CardDescription>Best selling items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className="h-9 w-9 rounded-lg bg-muted" />
                    <div>
                      <p className="text-sm font-medium">Product {201 + i}</p>
                      <p className="text-xs text-muted-foreground">SKU: PRD-{2001 + i}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">${(Math.random() * 100 + 20).toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.floor(Math.random() * 100 + 10)} sales
                    </p>
                  </div>
                </div>
              ))}
              <div className="pt-2 text-center">
                <Button variant="ghost" size="sm" className="w-full">
                  View All Products
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

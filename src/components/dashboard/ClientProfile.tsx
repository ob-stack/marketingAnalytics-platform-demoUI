import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Check, User } from 'lucide-react';

export function ClientProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Access</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          {/* Profile Section */}
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Update your personal information and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl">
                      <User size={36} />
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change avatar
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" defaultValue="Anton" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" defaultValue="Minin" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center gap-2">
                      <Input id="email" defaultValue="anton@dev.com" />
                      <Badge className="flex items-center gap-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        <Check size={12} /> Verified
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue="Acme Inc." />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    defaultValue="Marketing Director with 8+ years of experience."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue="Pacific Time (UTC-8)" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save changes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Update your security preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="twoFactor">Two-factor authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account.
                    </p>
                  </div>
                  <Switch id="twoFactor" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sessionTimeout">Session timeout</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically log out after 30 minutes of inactivity.
                    </p>
                  </div>
                  <Switch id="sessionTimeout" defaultChecked />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Update security</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure how and when you receive notifications.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                {[
                  { id: 'reportReady', label: 'Reports are ready' },
                  { id: 'dataRefreshed', label: 'Data sources refreshed' },
                  { id: 'accountActivity', label: 'Account activity' },
                  {
                    id: 'systemUpdates',
                    label: 'System updates and announcements'
                  }
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <Label htmlFor={item.id} className="cursor-pointer">
                      {item.label}
                    </Label>
                    <Switch id={item.id} defaultChecked />
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">In-App Notifications</h3>
                {[
                  { id: 'inAppReports', label: 'Reports are ready' },
                  { id: 'inAppData', label: 'Data sources refreshed' },
                  { id: 'inAppAlerts', label: 'Performance alerts' },
                  { id: 'inAppChat', label: 'Chat messages' }
                ].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <Label htmlFor={item.id} className="cursor-pointer">
                      {item.label}
                    </Label>
                    <Switch
                      id={item.id}
                      defaultChecked={item.id !== 'inAppChat'}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <Button>Save preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>
                Manage your API keys and access tokens.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Current API Key</Label>
                  <div className="flex">
                    <Input
                      readOnly
                      value="••••••••••••••••••••••••••••••"
                      className="rounded-r-none"
                    />
                    <Button variant="outline" className="rounded-l-none">
                      Copy
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Last used: 2 days ago
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableApi">Enable API access</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow third-party applications to access your data.
                    </p>
                  </div>
                  <Switch id="enableApi" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Authorized Applications</h3>
                <div className="space-y-2">
                  {[
                    { name: 'Google Analytics', date: '2023-08-15' },
                    { name: 'Shopify', date: '2023-10-22' },
                    { name: 'Meta Ads', date: '2023-11-01' }
                  ].map((app, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b last:border-0"
                    >
                      <div>
                        <p className="text-sm font-medium">{app.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Connected on {app.date}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline">Generate new key</Button>
                <Button>Save changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Appearance</CardTitle>
              <CardDescription>
                Customize how your dashboard looks and feels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-md cursor-pointer bg-background">
                    <div className="h-20 w-full rounded bg-blue-500"></div>
                    <Label className="cursor-pointer">Blue (Default)</Label>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-md cursor-pointer">
                    <div className="h-20 w-full rounded bg-purple-500"></div>
                    <Label className="cursor-pointer">Purple</Label>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 border rounded-md cursor-pointer">
                    <div className="h-20 w-full rounded bg-teal-500"></div>
                    <Label className="cursor-pointer">Teal</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="darkMode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Switch between light and dark themes.
                    </p>
                  </div>
                  <Switch id="darkMode" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="compactView">Compact View</Label>
                    <p className="text-sm text-muted-foreground">
                      Display more content with reduced spacing.
                    </p>
                  </div>
                  <Switch id="compactView" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="animations">Interface Animations</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable smooth transitions and animations.
                    </p>
                  </div>
                  <Switch id="animations" defaultChecked />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Apply changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

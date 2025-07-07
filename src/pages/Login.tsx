
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Grid } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, add authentication logic here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary rounded-lg">
              <Grid className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-bold">Client Dashboard</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access your personalized metrics and insights.
          </p>
        </div>

        <Card>
          <CardHeader className="space-y-1 p-6">
            <CardTitle className="text-xl">Sign in</CardTitle>
            <CardDescription>
              Enter your credentials below to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 p-6">
            <Tabs defaultValue="credentials" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="sso">SSO</TabsTrigger>
              </TabsList>
              <TabsContent value="credentials" className="mt-4">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@company.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch 
                          id="remember-me" 
                          checked={rememberMe} 
                          onCheckedChange={setRememberMe} 
                        />
                        <Label htmlFor="remember-me" className="leading-none">
                          Remember me
                        </Label>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Switch id="twoFactor" />
                          <div>
                            <Label htmlFor="twoFactor" className="leading-none">
                              Use 2FA
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Enable two-factor authentication
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Sign in
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="sso" className="mt-4">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Sign in with your company's single sign-on solution.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/dashboard')}>
                    Continue with SSO
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Contact your administrator if you don't have SSO credentials
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <Separator />
          <CardFooter className="p-6">
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm text-muted-foreground">Secure login</span>
              </div>
              <div className="text-sm text-center text-muted-foreground">
                Don't have an account?{' '}
                <a href="#" className="text-primary hover:underline">
                  Contact us
                </a>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;

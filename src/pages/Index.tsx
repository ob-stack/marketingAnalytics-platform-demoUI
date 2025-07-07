
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the login page
    navigate('/');
  }, [navigate]);

  return null; // This won't be rendered as we redirect immediately
};

export default Index;

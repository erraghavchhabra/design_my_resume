import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Plus, ArrowLeft } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();


  const handleCreateResume = () => {
    navigate('/setup');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">My Resumes</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Create New Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            className="mb-8 p-8 cursor-pointer hover:shadow-lg transition-smooth border-2 border-dashed border-primary/30 hover:border-primary/50 bg-primary/5"
            onClick={handleCreateResume}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Create New Resume</h2>
              <p className="text-muted-foreground">
                Start building your professional resume from scratch
              </p>
            </div>
          </Card>
        </motion.div>

      </div>
    </div>
  );
};

export default Dashboard;

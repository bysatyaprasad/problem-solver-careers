
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-purple to-brand-blue overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <h1>
                    <span className="block text-white text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                      Build Your Future
                    </span>
                    <span className="mt-1 block text-brand-orange text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                      One Skill at a Time
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Discover high-income careers that solve valuable problems, with detailed roadmaps to help you get there from wherever you are now.
                  </p>
                  <div className="mt-8 sm:mt-12">
                    <div className="rounded-md shadow">
                      <Link to="/careers">
                        <Button className="w-full flex items-center justify-center px-8 py-6 text-lg bg-brand-orange hover:bg-brand-orange/90">
                          Explore Career Paths
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
          alt="Students collaborating on a project"
        />
      </div>
    </div>
  );
};

export default HeroSection;

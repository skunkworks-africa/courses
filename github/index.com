import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, GitBranch, GitFork, GitPullRequest, Users, Star, Terminal } from 'lucide-react';

const CourseOffice = () => {
  const courses = [
    {
      title: "Git Fundamentals",
      description: "Master the basics of version control with Git",
      icon: <GitBranch className="w-6 h-6" />,
      students: 1234,
      rating: 4.8,
      modules: 8
    },
    {
      title: "Advanced GitHub Workflows",
      description: "Learn professional Git workflows and collaboration",
      icon: <GitPullRequest className="w-6 h-6" />,
      students: 892,
      rating: 4.9,
      modules: 12
    },
    {
      title: "Open Source Contribution",
      description: "Start contributing to open source projects",
      icon: <GitFork className="w-6 h-6" />,
      students: 756,
      rating: 4.7,
      modules: 10
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">GitHub Learning Hub</h1>
        <p className="text-gray-600">Master version control and collaborative development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                {course.icon}
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </div>
              <p className="text-gray-600">{course.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Book className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.modules} modules</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardContent className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <Terminal className="w-8 h-8 text-green-500" />
            <div>
              <h3 className="text-xl font-semibold">Ready to start learning?</h3>
              <p className="text-gray-600">Join thousands of developers mastering Git and GitHub</p>
            </div>
          </div>
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseOffice;
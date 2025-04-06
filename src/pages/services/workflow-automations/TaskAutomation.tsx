
import React from 'react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';
import { CheckCircle, Robot, Clock, BarChart } from 'lucide-react';

const TaskAutomation = () => {
  const benefitMetrics = [
    {
      title: "Time Savings",
      value: "70%",
      description: "Average reduction in time spent on routine tasks",
      icon: Clock
    },
    {
      title: "Error Reduction",
      value: "95%",
      description: "Typical decrease in human errors through automation",
      icon: CheckCircle
    },
    {
      title: "Productivity Gain",
      value: "40%",
      description: "Average increase in team productivity post-automation",
      icon: BarChart
    },
    {
      title: "24/7 Operation",
      value: "100%",
      description: "Constant task execution without breaks or downtime",
      icon: Robot
    }
  ];

  return (
    <SubcategoryTemplate
      title="Task Automation"
      parentService="Workflow Automations"
      parentServicePath="/services/workflow-automations"
      description="Our Task Automation solutions eliminate repetitive manual work through intelligent automation, freeing up your team to focus on strategic, high-value activities."
      imageUrl="/lovable-uploads/task-automation.jpg"
      keyFeatures={[
        "AI-powered task identification and prioritization",
        "No-code/low-code automation solutions",
        "Robotic Process Automation (RPA) implementation",
        "Custom automation script development",
        "Integration with your existing business applications",
        "Continuous monitoring and optimization"
      ]}
      benefits={[
        "Save hundreds of hours by automating routine, repetitive tasks",
        "Eliminate human error in data entry and processing",
        "Enable 24/7 operation without additional staffing",
        "Scale operations without proportionally increasing headcount",
        "Improve employee satisfaction by reducing mundane work",
        "Achieve consistent quality and compliance in task execution"
      ]}
      useCases={[
        "Data entry and extraction automation",
        "Report generation and distribution",
        "Email processing and response automation",
        "Document creation and management",
        "Approval workflows and notifications",
        "Customer data management and synchronization"
      ]}
    >
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Task Automation By The Numbers</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {benefitMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex p-3 rounded-full bg-adrig-blue/10 text-adrig-blue mb-4">
                  <metric.icon size={24} />
                </div>
                <div className="text-4xl font-bold text-adrig-blue mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Tasks We Commonly Automate</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Data Entry & Extraction
                </h4>
                <p className="text-gray-600 text-sm">Automatically capture, validate and enter data from various sources including emails, forms, and documents.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Report Generation
                </h4>
                <p className="text-gray-600 text-sm">Schedule and generate standardized reports from multiple data sources and distribute them automatically.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Email Management
                </h4>
                <p className="text-gray-600 text-sm">Sort, categorize, and respond to emails based on content, urgency, and predefined business rules.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Document Processing
                </h4>
                <p className="text-gray-600 text-sm">Create, format, and manage documents automatically based on templates and data inputs.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Approval Workflows
                </h4>
                <p className="text-gray-600 text-sm">Route documents for approval, send reminders, and update status based on defined workflows.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Data Synchronization
                </h4>
                <p className="text-gray-600 text-sm">Keep information consistent across multiple systems without manual updates or intervention.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Inventory Management
                </h4>
                <p className="text-gray-600 text-sm">Track inventory levels, create alerts, and generate purchase orders automatically when stocks are low.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Customer Communications
                </h4>
                <p className="text-gray-600 text-sm">Send personalized updates, follow-ups, and notifications based on customer actions or events.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <CheckCircle className="text-adrig-blue mr-2" size={18} />
                  Calendar & Meeting Management
                </h4>
                <p className="text-gray-600 text-sm">Schedule meetings, send invites, and follow up with attendees without manual intervention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubcategoryTemplate>
  );
};

export default TaskAutomation;

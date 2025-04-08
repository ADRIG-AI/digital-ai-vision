
import React from 'react';
import { CheckCircle } from 'lucide-react';
import SubcategoryTemplate from '@/components/SubcategoryTemplate';

const TaskAutomation = () => {
  return (
    <SubcategoryTemplate
      title="Task Automation"
      parentService="Workflow Automations"
      parentServicePath="/services/workflow-automations"
      description="Eliminate repetitive manual tasks with our intelligent automation solutions. Our AI-powered systems take over routine activities, reducing human error, increasing speed, and allowing your team to focus on strategic priorities."
      imageUrl="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&q=80&w=1400"
      keyFeatures={[
        "Robotic Process Automation (RPA) for repetitive task execution",
        "Document processing and data extraction capabilities",
        "Scheduled task execution with conditional logic",
        "Error detection and self-correction mechanisms",
        "Audit trails and comprehensive activity logging",
        "User-friendly interfaces for monitoring and managing automated tasks"
      ]}
      benefits={[
        "Eliminate human error in repetitive, rule-based tasks",
        "Complete routine processes in a fraction of the time required manually",
        "Maintain consistent quality and adherence to standards",
        "Scale operations without proportional increases in administrative staff",
        "Reduce employee burnout by automating monotonous activities",
        "Gain detailed insights into task completion metrics and efficiency"
      ]}
      useCases={[
        "An accounting firm automated invoice processing, reducing processing time by 85% and virtually eliminating data entry errors",
        "A human resources department implemented automated employee onboarding, completing documentation in minutes instead of days",
        "A legal services provider automated document generation and review, increasing throughput by 300% while improving compliance",
        "A marketing agency automated report generation and distribution, saving 25 hours per week of analyst time while delivering more comprehensive insights"
      ]}
    />
  );
};

export default TaskAutomation;

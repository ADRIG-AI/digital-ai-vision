import SubcategoryTemplate from "@/components/SubcategoryTemplate";
import { CheckCircle } from "lucide-react";

const TaskAutomation = () => {
  return (
    <SubcategoryTemplate
      title="Task Automation"
      parentService="Workflow Automations"
      parentServicePath="/services/workflow-automations"
      description="Eliminating repetitive tasks with intelligent automation"
      imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      keyFeatures={[
        "Automated document processing and data entry",
        "Intelligent email filtering and response",
        "Scheduled report generation and distribution",
        "Form data extraction and processing",
        "Repetitive process automation",
        "Cross-platform data synchronization"
      ]}
      benefits={[
        "Reduce operational costs by eliminating manual tasks",
        "Minimize human error in repetitive processes",
        "Free up employee time for more strategic activities",
        "Increase processing speed and throughput",
        "Ensure consistency in task execution",
        "Enable 24/7 operation without human intervention"
      ]}
      useCases={[
        "Automated invoice processing and payment approval workflows",
        "Customer onboarding and account setup automation",
        "Inventory management and reordering processes",
        "HR document processing and employee onboarding",
        "Automated data migration between systems",
        "Regular compliance reporting and documentation"
      ]}
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">What is Task Automation?</h3>
          <p className="text-gray-700">
            Task automation refers to the use of technology to perform repetitive, rule-based tasks with minimal human intervention. By automating routine tasks, businesses can significantly reduce operational costs, minimize errors, and free up employees to focus on more strategic activities.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>Increased productivity through elimination of manual, repetitive tasks</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>Reduced error rates and improved consistency in task execution</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>Cost savings through reduced labor requirements for routine tasks</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>Improved employee satisfaction by eliminating tedious work</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
              <span>24/7 operation capability without fatigue or human error</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Task Automation Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-5">
              <h4 className="text-lg font-medium mb-2">Document Processing</h4>
              <p className="text-gray-600">Automated extraction, classification, and routing of information from documents, emails, and forms.</p>
            </div>
            <div className="border rounded-lg p-5">
              <h4 className="text-lg font-medium mb-2">Data Entry Automation</h4>
              <p className="text-gray-600">Intelligent systems that capture, validate, and input data across multiple platforms and databases.</p>
            </div>
            <div className="border rounded-lg p-5">
              <h4 className="text-lg font-medium mb-2">Report Generation</h4>
              <p className="text-gray-600">Automated creation and distribution of reports based on predefined schedules and triggers.</p>
            </div>
            <div className="border rounded-lg p-5">
              <h4 className="text-lg font-medium mb-2">Email Processing</h4>
              <p className="text-gray-600">Smart email classification, response generation, and follow-up scheduling.</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="bg-adrig-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">1</div>
              <div>
                <h4 className="font-medium">Task Analysis</h4>
                <p className="text-gray-600">We identify repetitive tasks that are consuming valuable time and resources within your organization.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-adrig-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">2</div>
              <div>
                <h4 className="font-medium">Solution Design</h4>
                <p className="text-gray-600">Our experts design custom automation solutions using appropriate technologies like RPA, AI, or scripting.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-adrig-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">3</div>
              <div>
                <h4 className="font-medium">Implementation</h4>
                <p className="text-gray-600">We build, test, and deploy automation solutions that seamlessly integrate with your existing systems.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-adrig-blue text-white rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">4</div>
              <div>
                <h4 className="font-medium">Monitoring & Optimization</h4>
                <p className="text-gray-600">Continuous monitoring and refinement ensure your automation solutions evolve with your business needs.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-adrig-blue/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Success Story</h3>
          <p className="italic text-gray-700 mb-4">
            "By implementing task automation for our invoice processing system, we reduced processing time by 85% and eliminated data entry errors completely. Our finance team now focuses on analysis rather than data entry."
          </p>
          <p className="font-medium">- CFO, Mid-size Manufacturing Company</p>
        </div>
      </div>
    </SubcategoryTemplate>
  );
};

export default TaskAutomation;

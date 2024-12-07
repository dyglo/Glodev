'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeLanguage = 'python' | 'typescript' | 'javascript' | 'c';

interface CodeExamples {
  python: string;
  typescript: string;
  javascript: string;
  c: string;
}

const codeExamples: CodeExamples = {
  python: `def analyze_data(data: List[Dict]) -> Dict:
    """Analyze data using machine learning."""
    model = RandomForestClassifier()
    features = preprocess_data(data)
    return {
        "predictions": model.fit_predict(features),
        "accuracy": model.score(features, labels)
    }`,
  typescript: `interface DataAnalysis {
    predictions: number[];
    accuracy: number;
}

async function analyzeData(data: Record<string, any>[]): Promise<DataAnalysis> {
    const model = await tf.loadLayersModel("model.json");
    const features = preprocessData(data);
    return {
        predictions: model.predict(features),
        accuracy: await evaluateModel(model, features)
    };
}`,
  javascript: `const analyzeData = async (data) => {
    // Initialize TensorFlow.js model
    const model = await tf.sequential();
    model.add(tf.layers.dense({ units: 10, activation: "relu" }));
    
    // Process and predict
    const features = preprocessData(data);
    const predictions = model.predict(features);
    
    return {
        predictions,
        accuracy: await model.evaluate(features, labels)
    };
}`,
  c: `#include <tensorflow/c/c_api.h>

typedef struct {
    float* predictions;
    float accuracy;
} AnalysisResult;

AnalysisResult analyze_data(float* data, size_t size) {
    TF_Graph* graph = TF_NewGraph();
    TF_Status* status = TF_NewStatus();
    
    // Load and run model
    TF_Buffer* model = load_model("model.pb");
    TF_Session* session = create_session(graph, status);
    
    return run_inference(session, data, size);
}`
};

const CodeShowcase: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<CodeLanguage>('python');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage(prev => {
        const languages: CodeLanguage[] = ['python', 'typescript', 'javascript', 'c'];
        const currentIndex = languages.indexOf(prev);
        return languages[(currentIndex + 1) % languages.length];
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="relative w-full h-full bg-black/90 rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full bg-gray-800 px-4 py-2 flex justify-between items-center">
        <span className="text-teal-400">{currentLanguage.toUpperCase()}</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLanguage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-4 overflow-auto max-h-[calc(100%-4rem)]"
        >
          <SyntaxHighlighter
            language={currentLanguage}
            style={atomDark}
            customStyle={{
              background: 'transparent',
              fontSize: '14px',
              margin: 0,
              padding: 0,
            }}
            showLineNumbers
          >
            {codeExamples[currentLanguage]}
          </SyntaxHighlighter>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CodeShowcase;

import { useEffect, useState } from "react";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackTests,
  SandpackLayout,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import useEventSender from "../../hooks/useEventSender";

const ListenerIframeMessage = ({ testNumber }) => {
  const eventSender = useEventSender();
  const { listen } = useSandpack();
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const handleMessage = (msg) => {
      const { type, event } = msg;

      if (type === "test" && event === "test_end") {
        const { test } = msg;
        const { name: testName, status: result } = test;

        setTestResults((prevResults) => [...prevResults, { testName, result }]);
      }
    };

    const stopListening = listen(handleMessage);

    return () => {
      stopListening();
    };
  }, [listen]);

  useEffect(() => {
    if (testResults.length === testNumber) {
      eventSender.send("run_test", testResults);
      setTestResults([]);
    }
  }, [testResults]);

  return null;
};

export default function CustomSandpack({ files, main = "/app.test.js" }) {
  const testNumber = files["/app.test.js"].code.split(/it\(|test\(/).length - 1;

  return (
    <SandpackProvider
      files={files}
      autorun={false}
      autoReload={false}
      showConsole={true}
      showConsoleButton={true}
      customSetup={{
        entry: "/app.js",
        main,
        environment: "parcel",
        mode: "tests",
      }}
    >
      <SandpackLayout>
        <ListenerIframeMessage testNumber={testNumber} />
        <SandpackCodeEditor
          showLineNumbers
          showTabs={false}
          initMode="lazy"
          wrapContent={true}
          style={{
            height: "700px",
            maxHeight: "90%",
          }}
          extensions={[autocompletion()]}
          extensionsKeymap={[completionKeymap]}
        />
        <SandpackTests
          style={{
            height: "700px",
            maxHeight: "90%",
          }}
          verbose={true}
          watchMode={false}
          showVerboseButton={false}
          showWatchButton={false}
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}

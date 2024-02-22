import { useEffect } from "react";
import {
  SandpackProvider,
  SandpackCodeEditor,
  SandpackTests,
  SandpackLayout,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import useEventSender from "../../hooks/useEventSender";

const ListenerIframeMessage = () => {
  const eventSender = useEventSender();
  const { listen } = useSandpack();

  useEffect(() => {
    const stopListening = listen((msg) => {
      const { type, event } = msg;

      if (type === "test" && event === "test_end") {
        const { test } = msg;
        const { name: testName, status: result } = test;

        eventSender.send("run_test", [{ testName, result }]);
      }
    });

    return () => {
      stopListening();
    };
  }, [listen]);
};

export default function CustomSandpack({ files, main = "/app.test.js" }) {
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
        <ListenerIframeMessage />
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

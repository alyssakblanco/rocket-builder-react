import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/webgl_build/webgl_build.loader.js",
    dataUrl: "/webgl_build/webgl_build.data",
    frameworkUrl: "/webgl_build/webgl_build.framework.js",
    codeUrl: "/webgl_build/webgl_build.wasm",
  });

  const webgl_container = {
    aspectRatio: 16 / 9,
    width: "100%"
  };


  return (
    <div className="App">
      <div>
        <h1>Rocket Builder: Design, Learn, Launch</h1>
      </div>
      <Unity unityProvider={unityProvider} style={webgl_container} />
    </div>
  );
}

export default App;

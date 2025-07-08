import { useEffect } from 'react';
function Title() {
  useEffect(() => {
    document.title = "My Portfolio | Pranit Menkar";
  }, []);

  return <div></div>;
}

export default Title;
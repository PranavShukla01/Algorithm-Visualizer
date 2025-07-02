import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const data = {
    "Sorting Visualizer": [
      ["/sorting/mergesort", "Mergesort", "Merge sort visualization with step-by-step process"],
      ["/sorting/selectionsort", "Selectionsort", "Selection sort algorithm visualization"],
      ["/sorting/bubblesort", "Bubblesort", "Bubble sort with interactive elements"],
      ["/sorting/insertionsort", "Insertionsort", "Insertion sort visualization"],
      ["/sorting/quicksort", "Quicksort", "Quick sort algorithm demonstration"],
    ],
    "Graph Visualizer": [
      ["/graph/breadthfirstsearch", "Breadth First Search", "BFS algorithm visualization"],
      ["/graph/depthfirstsearch", "Depth First Search", "DFS algorithm demonstration"],
      ["/graph/minimumcostpath", "Minimum Cost Path", "Find the optimal path in a graph"],
    ],
    "Tree Visualizer": [
      ["/tree/preordertraversal", "Preorder Traversal", "Preorder tree traversal visualization"],
      ["/tree/inordertranversal", "Inorder Traversal", "Inorder tree traversal demonstration"],
      ["/tree/postordertraversal", "PostOrder Traversal", "Postorder tree traversal visualization"],
    ],
  };

  return (
    <div className={classes.home}>
      <h1 className={classes.heading_top}>DSA Visualizer</h1>
      <div className={classes.content}>
        {Object.entries(data).map(([key, value], index) => (
          <div key={key} className={classes.each_object} style={{ animationDelay: `${index * 0.1}s` }}>
            <h2 className={classes.heading}>{key}</h2>
            <div className={classes.navbar}>
              <div className={classes.nav}>
                {value.map(([path, title, description], idx) => (
                  <Link
                    to={path}
                    className={classes.navItem}
                    key={idx}
                    title={description}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

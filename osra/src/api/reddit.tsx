// import axios from 'axios';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// class FetchDemo extends React.Component {
//   constructor(props: any) {
//     super(props);

//     this.state = {
//       posts: []
//     };
//   }

//   public componentDidUpdate() {
//     axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
//       .then(res => {
//         const posts = res.data.data.children.map(obj => obj.data);
//         this.setState({ posts });
//       });
//   }

//   public render() {
//     return (
//       <div>
//         <h1>{`/r/${this.props.subreddit}`}</h1>
//         <ul>
//           {this.state.posts.map(post =>
//             <li key={post.id}>{post.title}</li>
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <FetchDemo subreddit="reactjs"/>,
//   document.getElementById('root')
// );
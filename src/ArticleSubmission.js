import { firestore } from './firebase';

function ArticleSubmission() {
  const [article, setArticle] = useState('');

  const handleArticleSubmit = (e) => {
    e.preventDefault();
    firestore.collection('articles').add({ content: article });
    setArticle('');
  };

  return (
    <div>
      <h2>Submit Your Story</h2>
      <form onSubmit={handleArticleSubmit}>
        <textarea
          value={article}
          onChange={(e) => setArticle(e.target.value)}
          placeholder="Share your story..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ArticleSubmission;

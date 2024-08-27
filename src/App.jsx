import { useState, useEffect } from 'react';
import ArticleData from '/data.json?url'

function NewsArticle(data) {
  data = data.data
  const heading = data.heading
  const subheading = data.subheading
  const name = data.name
  const imageUrl = data.imageUrl

  const redirect = () => {
    location.href=name
  }

  return (
    <div onClick={redirect} className='flex justify-start cursor-pointer items-center mx-auto max-w-screen-md p-4 border-y-2 bg-gray-100'>
      <img src={imageUrl} className='inline size-24' />
      <div className='inline ml-4 text-2xl'>
        <div>
          {heading}
        </div>
        <div className='text-lg font-thin'>
          {subheading}
        </div>
      </div>
    </div>
  );
}

function TopicButton({ topic }) {
  const redirect = () => {
    location.href=topic
  }

  return (
    <div onClick={redirect} className='text-center bg-black/50 text-white font-thin rounded-md shadow-md cursor-pointer'>
      {topic}
    </div>
  );
}

function App() {
  const [data, setData] = useState(null)
  const retrieveData = async () => {
    const response = await fetch(ArticleData);
    const result = await response.json();
    setData(result);
  };

  useEffect(function() {
    retrieveData();
  }, []);

  return (
    <>
      <div className='flex justify-center flex-none'>

        <div className='min-h-screen absolute p-10 w-2/12 left-0 bg-white/25 shadow-xl border backdrop-blur-sm space-y-4'>
          <div className='font-serif text-center text-2xl'>
            Topics
          </div>
          <div className='flex flex-col gap-2'>
            <TopicButton topic="World News" />
            <TopicButton topic="U.S. Politics" />
            <TopicButton topic="Local News" />
          </div>
        </div>

        <div className='bg-white space-y-2 border shadow-lg flex-initial max-w-screen-md min-h-screen'>
          {data && 
            data.articles.map((article) => (
              <NewsArticle key={article.name} data={article} />
            ))
          }
        </div>

      </div>
      <div className='w-full py-2 bg-white text-center bg-yellow-200/50 border backdrop-blur-sm'>
        <div className='text-2xl font-bold font-serif underline decoration-4'>
          MY TIMES
        </div>
        <div className='flex justify-center gap-2'>
          <a className='border py-1 px-2 rounded-lg shadow-lg' href='https://github.com/Kecreeper/news-website'>
            GitHub
          </a>
          <a className='border py-1 px-2 rounded-lg shadow-lg' href=''>
            Empty
          </a>
        </div>
      </div>
    </>
  )
}

export default App

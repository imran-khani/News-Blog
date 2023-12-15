import Link from 'next/link';
import data from '../../../public/data.json'


const post = ({ slug }: { slug: string }) => {
  const singlePost = data.find((post) => post.slug === slug)
  return singlePost;
}


const singlePage = ({ params }: { params: { slug: string } }) => {
  const singlPost = post(params)
  if (!singlPost) return <h1>Post Not found ~ try checking your dynamic routing</h1>

  return (
    <div className=" py-12 container mx-auto">
      <Link className="bg-indigo-50 text-indigo-500 p-3 rounded-lg hover:bg-indigo-700 hover:text-white transition-all duration-500" href="/blog">GO BACK</Link>
      <div className="max-w-5xl mx-auto flex flex-col gap-5 ">

        <img src={singlPost?.urlToImage?.toString()} className="object-cover object-center sm:w-3/5 mx-auto rounded-lg " alt={singlPost?.title} />
        <h1 className="font-medium sm:text-2xl text-xl ">{singlPost?.title}</h1>
        <p className="mt-4">Author: <span className='text-indigo-600 font-medium text-lg underline'> {singlPost?.author}</span></p>
        <p className="text-sm text-gray-500">
          Published At: {new Date(singlPost?.publishedAt).toLocaleDateString()}
        </p>
        <p>{singlPost?.content}</p>
      </div>
    </div>
  )
}

export default singlePage


export async function getStaticParams() {
  return data.map((post) => (
    {
      params: {
        slug: post.slug
      }
    }
  ))
}
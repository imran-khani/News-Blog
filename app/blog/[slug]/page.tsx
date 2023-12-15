import Link from 'next/link';
import data from '../../../public/data.json'


const post = ({ slug }: { slug: string }) => {
  const singlePost = data.find((post) => post.slug === slug)
  return singlePost;
}


const singlePage = ({ params }: { params: { slug: string } }) => {
  const singlPost = post(params)

  return (
    <div className=" py-12 container mx-auto">
      <Link className="bg-indigo-50 text-indigo-500 p-3 rounded-lg hover:bg-indigo-700 hover:text-white transition-all duration-500" href="/blog">GO BACK</Link>
      <div className="max-w-5xl mx-auto flex flex-col gap-5">

        <img src={singlPost?.urlToImage?.toString()} className="object-cover object-center sm:w-3/5 md:w-full" alt={singlPost?.title} />
        <h1 className="font-medium sm:text-2xl text-xl ">{singlPost?.title}</h1>
        <p>{singlPost?.content}</p>
      </div>
    </div>
  )
}

export default singlePage


const getStaticParams = () => {
  return data.map((post) => {
    slug: post.slug
  })
}
import cover from "@/assets/images/cover.jpg"

export default function TestPage() {
  return (
    <div>
      <h1 class="text-2xl pb-5">Content of the test page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        nesciunt vitae? At ex distinctio a repudiandae corporis aliquid
        sapiente, ipsam accusantium, molestias facilis quo natus qui autem,
        ducimus hic consequuntur.
      </p>

      <div>
        <img
          class="mt-12 w-full h-96 object-cover rounded drop-shadow-xl"
          src={cover}
          alt="cover"
        />
      </div>
    </div>
  )
}

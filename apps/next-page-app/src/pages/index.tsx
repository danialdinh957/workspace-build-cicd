import { Button } from '@danialdinh/test-ui-pkg'

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      <div>
        <Button size="sm">Hello from Button</Button>
      </div>

      <div>
        <Button>Hello from Button</Button>
      </div>

      <div>
        <Button size="lg">Hello from Button</Button>
      </div>
    </div>
  )
}

export default Home

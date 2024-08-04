import { applyHeaderStyles, Content, EdgeSidebar, Footer, Header, Root } from "./mui-treasury/layout-core-v6"

function App() {
  return (
    <Root>
      <Header sx={{ ...applyHeaderStyles({ fullWidth: true, height: '63px' })}}>
        Header
      </Header>
      <EdgeSidebar>
        Sidebar
      </EdgeSidebar>
      <Content>
        Content
      </Content>
      <Footer>
        Footer
      </Footer>
    </Root>
  )
}

export default App

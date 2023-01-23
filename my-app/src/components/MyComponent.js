import { Button, Page, BackLink, H1 } from 'govuk-react'

const MyComponent = ({title}) => (<div>
 <Page beforeChildren={<BackLink href="#">Back</BackLink>}>
  <H1>
    Heat Networks
  </H1>
  <Button>Start Now</Button>
</Page>

  
</div>)

export default MyComponent
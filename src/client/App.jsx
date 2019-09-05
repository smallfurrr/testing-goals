import React from 'react';
import { hot } from 'react-hot-loader';
import { Box, Button, Collapsible, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';

// import Counter from './components/counter/counter';
// import Form from './components/form/form';

const theme = {
    global: {
        colors: {
            'brand': '#228BE6',
            'text': {
                light: 'rgba(0, 0, 0, 0.87)',
            },
        },
        edgeSize: {
            small: '14px',
        },
        elevation: {
            light: {
                medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
            },
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
    button: {
       border: {
            width: '1px',
            radius: '4px',
        },
        padding: {
           vertical: '8px',
           horizontal: '16px',
      },
      extend: props => `
        text-transform: uppercase;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: normal;`
    },
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    // pad={{ vertical: 'small', horizontal: 'medium' }}
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }


  render() {
    const { showSidebar } = this.state;

    return (
        <div>
            <Grommet theme={theme} full>
            <Box fill>
            <AppBar>
                <Heading level='3' margin='none'>My App</Heading>
                <Button icon={<Notification />}
                onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))}
                />
            </AppBar>
                <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                    <Box flex align='center' justify='center'>
                        app body
                    </Box>
                <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                        flex
                        width='medium'
                        background='light-2'
                        elevation='small'
                        align='center'
                        justify='center'
                    >
                        sidebar
                    </Box>
                </Collapsible>
                </Box>
            </Box>
               {/* <Typography variant="h6" color="inherit" noWrap>
                Company name
                </Typography>
                <Box direction='row'>
                <Button>Features</Button>
                <Button>Enterprise</Button>
                <Button>Support</Button>
                <GrommetButton color="primary" label='Login' />
                </Box>*/}
            </Grommet>
        </div>
    );
  }
}

export default hot(module)(App);
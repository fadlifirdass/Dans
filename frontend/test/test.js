import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    waitFor,
  } from '@testing-library/dom'
  import '@testing-library/jest-dom'


test('examples of some things', async () => {
    const famousProgrammerInHistory = 'Ada Lovelace'
    const container = getExampleDOM()

    const input = getByLabelText(container, 'Username')
    input.value = famousProgrammerInHistory
    getByText(container, 'Print Username').click()
  
    await waitFor(() =>
      expect(queryByTestId(container, 'printed-username')).toBeTruthy(),
    )
    expect(getByTestId(container, 'printed-username')).toHaveTextContent(
      famousProgrammerInHistory,
    )
    expect(container).toMatchSnapshot()
  })
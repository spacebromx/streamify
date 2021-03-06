export const fetchInfo = async url => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (err) {
    console.log('Error', err)
  }
}

export const generatePageTitle = (title = '', separator = '-') => `Streamify ${separator} ${title}`
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const pageTemplate = path.resolve('src/templates/page.js')
	return graphql(`
		query PagesQuery {
			wordPress {
				pages {
		      nodes {
	      		id
		        slug
		        elementorData
		        content
		        title
		        uri
		      }
		    }
			}
		}
	`, {limit: 1000}).then(result => {
		if(result.errors) {
			throw result.errors
		}

		result.data.wordPress.pages.nodes.forEach(node => {
			createPage({
				path: `${node.uri}`,
				component: pageTemplate,
				context: node,
			})
		})
	})
}
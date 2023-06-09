// 接口封装
export default {
	common: {
		baseUrl: 'localhost:3000/api',
		data: {},
		header: {
			'Content-Type': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'GET',
		dataType: 'json'
	},
	request(options = {}) {
		options.url = this.common.baseUrl + options.url
		options.data = options.data || this.common.data
		options.header = options.header || this.common.header
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		return new Promise((res, rej) => {
			uni.request({
				options,
				success: (result) => {
					if (result.statusCode != 200) {
						return rej()
					}
					res(res.data.data);
				}
			})
		})
	}
}

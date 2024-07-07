window.translationFileCallback({
	account: {
		title: 'Tài khoản',
		global_rank: 'Hạng toàn cầu',
		unavailable: 'Hồ sơ không có sẵn',
		logout: 'Đăng xuất',
		change_name: 'Đổi Tên',
		namechange_dialog: {
			title: 'Đổi Tên',
			desc: 'Đổi tên sẽ tốn cho bạn %cost% đồng vàng để tránh tình trạng đổi tên liên tục.',
			desc_no_price:
				'Tài khoản của bạn sẽ bị cấm nếu chọn tên không phù hợp hoặc đổi tên quá thường xuyên.'
		},
		namechange_failed_dialog: { desc: 'Đổi tên thất bại:' },
		namechange_success: {
			title: 'Tên đã được đổi!',
			desc: 'Tên của bạn đã được thay đổi, tuy nhiên sẽ tốn thời gian trước khi nó được hiện lên khắp nơi.'
		},
		statistics: {
			highest_day: 'Ngày cao nhất đã đạt được',
			games_played: 'Số lần chơi',
			total_time_played: 'Tổng thời gian chơi',
			zombies_killed: 'Số thây ma đã giết',
			buildings_placed: 'Số tòa nhà đã đặt'
		},
		labels: { email_link: 'Kết nối E-Mail', statistics: 'Thống kê' },
		email_link: {
			link_desc: 'Kết nối địa chỉ E-Mail của bạn để lưu tiến độ, lượt mua và lưu trò chơi!',
			link: 'Kết nối',
			unlink: 'Huỷ link',
			change: 'Thay đổi',
			confirmation_sent:
				'E-Mail xác nhận đã được gửi, nhấn đường link bên trong để xác nhận.',
			link_time: 'Kết nối được %time%'
		},
		dialog_link_email: {
			title: 'Kết nối E-Mail',
			receive_news: 'Nhận tin tức',
			desc: 'Chúng tôi sẽ gửi cho bạn một E-Mail với đường link xác nhận.'
		},
		dialog_link_failed: {
			title: 'Kết nối thất bại',
			desc: 'Không thể liên kết email của bạn vì:'
		},
		dialog_link_started: {
			title: 'Xác nhận E-Mail',
			desc: 'Một E-Mail với đường link xác nhận đã được gởi đến địa chỉ của bạn!'
		},
		dialog_confirm_unlink: {
			title: 'Huỷ kết nối E-Mail?',
			desc: 'Bạn sẽ không thể khôi phục các món đồ đã mua, tiền hoặc lưu trò chơi nữa! Tóm lại, đây là ý kiến tồi.'
		},
		dialog_unlink_success: {
			title: 'Thành công',
			desc: 'E-Mail của bạn đã gỡ bỏ thành công khỏi tài khoản của bạn. Bạn không còn có thể khôi phục các đồ đã mua, tiền và các lưu trò chơi.'
		},
		dialog_unlink_failure: {
			title: 'Thất bại',
			desc: 'Chúng tôi không thể huỷ liên kết E-Mail của bạn từ tài khoản của bạn vì:'
		},
		dialog_logout_delete_account: {
			title: 'Xác Nhận Xóa Tài Khoản',
			desc: 'Bạn sẽ không thể khôi phục tài khoản của bạn vì bạn chưa kết nối E-mail. Việc này sẽ xóa tài khoản của bạn VĨNH VIỄN. Xin hãy xác nhận.'
		},
		dialog_confirm_logout: {
			title: 'Xác nhận',
			desc: 'Bạn có chắc là bạn muốn đăng xuất? Để đăng nhập lại, bạn cần truy cập vào địa chỉ E-Mail đã liên kết.'
		}
	},
	achievements: {
		title: 'Thành tựu',
		unavailable: 'Thành tựu không có sẵn',
		categories: {
			beginner: 'Tập chơi',
			easy: 'Dễ',
			advanced: 'Nâng cao',
			hard: 'Khó',
			insane: 'Điên cuồng'
		},
		hidden: 'Bí mật',
		description:
			'Mở khóa thành tựu để có thêm đồng vàng! Thành tựu chỉ được mở khoá ở chế độ chơi đơn.',
		unlocked: 'Đã mở khóa',
		db: {
			link_email: {
				name: 'E-Mail liên kết',
				desc: 'Thêm và xác nhận địa chỉ E-Mail của bạn. Bạn có thể làm thế trong phần xem tài khoản.'
			},
			kill_50_zombies: {
				name: 'Chúng đang chết dần',
				desc: '50 zombie đầu tiên là khó nhất'
			},
			reach_day_5: {
				name: 'Căn bản sinh tồn',
				desc: 'Tới được ngày 5 rồi sao - không tồi so với một sự bắt đầu đâu!'
			},
			play_15_minutes: {
				name: 'Thời gian đang trôi',
				desc: 'Thời gian có thể rất ngắn, đúng không? Bạn đã chơi 15 phút rồi.'
			},
			place_5_buildings: {
				name: 'Bước đầu tiên',
				desc: 'Bạn đã đặt 5 toà tháp đầu tiên - tuyệt vời'
			},
			reach_level_5: {
				name: 'Cấp độ đang tời',
				desc: 'Bạn đã đạt được cấp độ 5 - đó là một khời đầu tốt'
			},
			enhance_level_25: { name: 'Những nâng cấp', desc: 'Nâng cấp một tháp đến cấp 25.' },
			kill_500_zombies: {
				name: 'Diệt sạch',
				desc: 'Giết 500 zombie the mở khoá - không hề khó?'
			},
			reach_day_20: {
				name: 'Trinh sát nghiệp dư',
				desc: 'Đạt ngày 20 để mở khoá - điều này có thể thực hiễn được.'
			},
			play_1_hour: { name: 'Thời gian đang trôi qua', desc: 'Chơi 1 giờ' },
			place_50_buildings: {
				name: 'Nhân viên xây dựng',
				desc: 'Bạn đã xây 50 toà tháp, đã quen rồi sao?'
			},
			reach_level_15: { name: 'Quá trình cày bắt đầu', desc: 'Cấp độ 15 - xin chúc mừng!' },
			enhance_level_50: { name: 'Những cải tiến', desc: 'Nâng cấp một tháp đến cấp 50.' },
			build_10_transporters: {
				name: 'Siêu tầm nhìn',
				desc: 'Có 10 bộ lặp sóng trong một ván chơi.'
			},
			have_10k_crystals: {
				name: 'Tiền đang vào',
				desc: 'Có 10.000 pha lê trong kho pha lê của bạn.'
			},
			place_10_solarpanels_in_desert: {
				name: 'Lập kế hoạch về môi trường',
				desc: 'Có 10 tấm pin mặt trời trong khi chơi ở Sa mạc.'
			},
			kill_3500_zombies: {
				name: 'Đó là một quân đội',
				desc: 'Đã được 3500 thây ma. Và còn nhiều nữa!'
			},
			reach_day_100: {
				name: 'Một trăm',
				desc: 'Ngày 100 - Bạn đã giết tất cả thây ma! Giỡn thôi.'
			},
			play_5_hours: {
				name: 'Nhiều giờ nữa',
				desc: 'Bạn đã tốn hết 5 tiếng của cuộc đời. Chúc mừng!'
			},
			place_500_buildings: {
				name: 'Người xúc đất',
				desc: 'Được trao sau khi bạn đặt tháp thứ 500.'
			},
			reach_level_25: { name: 'Có tiến độ', desc: 'Cấp độ 25 - tốt lắm!' },
			enhance_level_75: { name: 'Nâng cấp hoàn hảo', desc: 'Nâng cấp một tháp đến cấp 75.' },
			have_1mio_crystals: {
				name: 'Triệu phú',
				desc: 'Có một triệu pha lê trong kho chứa pha lê của bạn.'
			},
			reach_day_40_no_walls: {
				name: 'Tôi không cần tường',
				desc: 'Đạt ngày 40 mà không xây tường.'
			},
			every_building_built: {
				name: 'Tất cả',
				desc: 'Đặt tất cả các tháp trong cùng một lần chơi.'
			},
			kill_15k_zombies: {
				name: 'Tụi nó không chết',
				desc: '15.000 thây ma - Có bao nhiêu tất cả vậy?'
			},
			reach_day_200: { desc: 'Ngày 200 - Nghỉ giải lao thôi!' },
			play_24_hours: {
				name: 'Cả ngày',
				desc: 'Chúc mừng, bạn đã dành cả ngày chơi YORG.io. Bạn đã rất năng động'
			},
			place_3500_buildings: { name: 'Tòa tháp ở khắp nơi', desc: '3500 công trình - wooha!' },
			reach_level_50: {
				name: 'Gian nan',
				desc: 'Bạn đã qua một chặng đường dài, nhưng bạn đã đến đây rồi - Cấp độ 50!!'
			},
			enhance_level_100: {
				name: 'Càng cao, càng tốt',
				desc: 'Nâng cấp một tòa tháp đến cấp độ 100.'
			},
			have_1bil_crystals: {
				name: 'Tỉ phú',
				desc: 'Bạn đã có 1 triệu pha lê. Bạn sẽ dùng nói thế nào?'
			},
			explore_whole_ice_map: {
				name: 'Tôi cần chỗ trống',
				desc: 'Có mọi tháp trên mọi vùng của bản đồ băng.'
			},
			reach_day_30_cannons_only: {
				name: 'Pháo binh',
				desc: 'Đạt tới ngày 30 chỉ sử dụng tháp pháo.'
			},
			kill_100k_zombies: {
				name: '100,000 thây ma',
				desc: 'Ghê thật đấy! Bạn đả thương chúng rất nhiều!'
			},
			reach_day_300: {
				name: 'Hãy dừng chơi!',
				desc: 'Ngày thứ 300 - thật sự đấy, bạn nên đi gặp bác sĩ đi!'
			},
			place_10k_buildings: {
				name: 'Kiến trúc',
				desc: 'Sau khi đã đặt tòa tháp thứ 10,000, có vẻ như bạn đang biết mình đang làm gì.'
			},
			reach_level_75: {
				name: 'Kết thúc?',
				desc: 'Cấp 75, không ai thắng được bạn ... chờ đã, gì cơ?'
			},
			enhance_level_125: {
				name: 'Kết thúc rồi sao?',
				desc: 'Nâng cấp một tóa tháp đến cấp độ 125.'
			},
			unlocked_all_achievements: {
				name: 'Tôi xong rồi!',
				desc: 'Đã mở hết toàn bộ thành tựu khác rồi. Tuyệt vời!'
			}
		}
	},
	backend: {
		errors: {
			'network-error': 'Lỗi mạng - Hãy kiểm tra kết nối mạng!',
			offline: 'Bạn đang ngoại tuyến - Khởi động ứng dụng có kết nối để có thể trực tuyến.',
			'bad-response': 'Phản hồi kém. Hãy kiểm tra cập nhật ứng dụng.',
			'rate-limited': 'Bạn đang bị giới hạn hình ảnh. Hãy thử lại sau vài giây.',
			'unsupported-version':
				'Phiên bản này của ứng dùng không còn được hỗ trợ. Xin hãy cập nhật, nếu không thì bạn chỉ có thể chơi ngoại tuyến!',
			'unknown-error': 'Lỗi không xác định. Hãy thử lại sau.',
			unauthenticated: 'Chưa xác thực.',
			'invalid-request-schema': 'Lược đồ yêu cầu không hợp lệ. Hãy thử cập nhật ứng dụng.',
			'internal-server-error': 'Lỗi trong server',
			'database-error': 'Cơ sở dữ liệu bị lỗi, thử lại sau',
			'not-found': 'Không tìm thấy điểm API kết thúc.',
			'server-overloaded': 'Server quá tải, thử lại sau!',
			'failed-to-decompress': 'Giải nén dữ liệu thất bại.',
			'checksum-missing': 'Thiếu sự kiểm trả tổng thể.',
			'checksum-mismatch': 'Sự kiểm tra tổng thể đã được tính không khớp.',
			'failed-to-parse': 'Không thể phân tích dữ liệu',
			'invalid-session': 'Phiên không hợp lệ. Thử khởi động lại ứng dụng.',
			'session-expired': 'Phiên đã hết hạn. Hãy thử khởi động lại ứng dụng.',
			'failed-to-lock-session': 'Phiên của bạn đã hết hạn. Xin hãy khởi động lại ứng dụng.',
			'invalid-player-name':
				'Tên của người chơi không nên chứa nội dung thô lỗ hoặc riêng tư.',
			'player-name-taken': 'Tên người chơi đã được sử dụng.',
			'no-recaptcha-token':
				'Xác nhận mã recaptcha thất bại. Thử tải lại trang hoặc sử dụng trình duyệt khác!',
			'recaptcha-api-error': 'Thất bại liên lạc với bên api thứ 3 (recaptcha của google).',
			'invalid-auth-key': 'Mã xác thật không hợp lệ.',
			'failed-to-lock-for-login': 'Có quá nhiều yêu cầu. xin hãy thử lại sau giây lát.',
			banned: 'Tài khoản của bạn đã bị cấm!',
			'leaderboard-invalid-mode': 'Chế độ bảng xấp hạng không hợp lệ.',
			'savegame-invalid-key': 'Trò chơi đã lưu của bạn không có mã đồng bộ hóa hợp lệ.',
			'savegame-meta-does-not-match':
				'Dữ liệu trò chơi đã lưu của bạn khác với dữ liệu có trong máy chủ của chúng tôi!',
			'savegame-already-gameover': 'Trò chơi đã lưu này đã kết thúc rồi!',
			'savegame-version-not-supported':
				'Phiên bản của trò chơi của bạn quá cũ, và chúng tôi không thể lưu tiến triển của bạn trong máy chủ của chúng tôi được! Xin hãy cập nhật nó.',
			'savegame-schema-validation-failed':
				'Trò chơi đã lưu không qua sự xác minh của máy chủ.',
			'savegame-server-version-is-newer':
				'Trò chơi đã lưu trong máy chủ của chúng tôi mới hơn. Có phải bạn đang chơi trên một thiết bị khác không?',
			'savegame-too-far-from-current-time':
				'Thời gian trong thiết bị của bạn quá khác so với thời gian của máy chủ của chúng tôi. Xin hãy chỉnh lại thời gian đúng.',
			'savegame-anticheat':
				'Bạn đã bị gắn cờ bởi hệ thống anti-cheat. Gian lận có thể dẫn đến việc tài khoản của bạn bị cấm!',
			'too-far-for-late-register':
				'File lưu game này đã được chơi ngoại tuyến quá lâu, và chúng tôi không thể xác nhận bạn không gian lận!',
			'savegame-key-not-found': 'File lưu game chưa được đăng kí trên máy chủ.',
			'savegame-already-over': 'Sẵn sàng lưu game rồi nhé!',
			'insufficient-diamonds': 'Bạn không có đủ tiền!',
			'unknown-perk-id>': 'Mặt hàng lỗi không xác định!',
			'perk-already-unlocked': 'Vật phẩm đã sẵn sàng được mở khóa!',
			'perk-not-purchaseable': 'Phúc lợi này không thể mua được!',
			'perk-not-owned': 'Bạn không sở hữu vật phẩm này!',
			'link-invalid-email': 'Email không hợp lệ rồi',
			'email-already-taken': 'Email này đã dùng mất tiêu rồi!!!',
			'email-send-failed':
				'Tụi tui không gởi mail cho bạn được, kiểm tra lạo coi sai sót nhé!',
			'email-already-unlinked': 'Tài khoản đang thiếu mail nè!',
			'recover-invalid-email': 'Mail không hợp lệ rồi!',
			'recover-email-not-known': 'Mail này không có tài khoản liên kết đâu!',
			'recover-email-not-confirmed':
				'Địa chỉ E-Mail đã kết nối với một tài khoản, nhưng chưa được xác nhận - Hãy xác nhận trước!',
			'recover-too-fast-please-wait':
				'Vui lòng đợi vài phút trước khi yêu cầu mã thông báo mới một lần nữa!',
			'recover-email-send-failed':
				'Không thể gửi mã thông báo đến địa chỉ E-Mail của bạn, hãy đảm bảo rằng nó hợp lệ!',
			'usetoken-invalid-email': 'Địa chỉ E-Mail không hợp lệ!',
			'usetoken-invalid-token-format':
				'Mã thông báo đã nhập không phải là mã thông báo hợp lệ!',
			'usetoken-token-not-found': 'Không thể tìm thấy mã thông báo đã nhập!',
			'usetoken-token-timed-out': 'Mã thông báo đã nhập quá cũ - vui lòng yêu cầu mã mới!',
			'bug-report-invalid-file-count': 'Số lượng tệp báo cáo lỗi đính kèm không hợp lệ.',
			'bug-report-invalid-buffer': 'Nhận được bộ đệm không hợp lệ từ khách hàng.',
			'bug-report-decompression-failed': 'Không thể giải nén báo cáo.',
			'bug-report-deserialize-failed': 'Không thể khử lưu lượng báo cáo.',
			'bug-report-validation-failed': 'Xác nhận báo cáo lỗi không thành công.',
			'all-servers-down':
				'Không có người chơi trò chơi miễn phí đã được tìm thấy. Thử lại sau!',
			'unknown-savegame-key': 'File lưu game không tìm thấy',
			'freecoins-unknown-category': 'Danh mục Đồng vàng không xác định.',
			'freecoins-already-used': 'Tùy chọn này được sử dụng rồi nhé!',
			'blocked-from-multiplayer':
				'Gian lận nè, bị nhiều người báo cáo nè, bị chặn rồi nhé. lêu lêu!!!!',
			'bad-lobby-token': 'Định dạng mã thông báo xấu.',
			'lobby-token-not-found-or-expired': 'Mã thông báo này không được biết hoặc đã hết hạn.',
			'lobby-token-version-mismatch': 'Không cùng phiên bản game rồi.',
			'invalid-transaction-id': 'ID giao dịch không hợp lệ. Vui lòng thử lại.',
			'invalid-transaction-status': 'Tình trạng giao dịch không hợp lệ. Vui lòng thử lại.',
			'xsolla-token-error': 'Không thể truy xuất mã thông báo từ Xsolla.',
			'not-a-steam-user': 'Nền tảng này không hỗ trợ thanh toán Steam.',
			'steam-init-txn-error': 'Không thể tạo giao dịch Steam. Vui lòng thử lại!',
			'steam-finalize-txn-error':
				'Không thể hoàn tất giao dịch Steam của bạn. Vui lòng thử lại!',
			'invalid-token': 'Mã thông báo máy chủ đã hết hạn, vui lòng kết nối lại.',
			'bad-token-format': 'mã thông báo không hợp lệ',
			'unsupported-match-mode': 'Không hỗ trợ trận đấu!!!',
			'double-login': 'Thiết bị khác đã kết nối với tài khoản... kiểm tra lại đi nè!',
			'reconnect-still-possible': 'Chưa rớt đâu... chờ chút kết nối lại nha!!!',
			'server-restart-queued':
				'Cụm này đang tạm nghỉ giải lao. Hãy chọn cụm khác chơi đỡ nhé!',
			'no-gameservers-available':
				'Cụm này không có máy chủ trò chơi có sẵn. Hãy thử một sảnh khác!',
			'lobby-not-found': 'Tiền sảnh không thể được tìm thấy. Có lẽ nó không còn hoạt động.',
			'already-in-lobby': 'Bạn đã ở trong một sảnh.',
			'lobby-creation-failed': 'Tạo tiền sảnh thất bại không rõ lý do.',
			'lobby-is-full': 'Sảnh này đã đầy.'
		}
	},
	bug_reporter: {
		button_text: 'Báo cáo lỗi đi',
		dialog_submit: {
			title: 'Gửi báo cáo',
			desc: 'Điều này sẽ gửi một bãi chứa đầy đủ đến các máy chủ của tôi. Vui lòng nhập chính xác những gì không hoạt động và làm thế nào tôi có thể tái tạo nó:',
			input_placeholder: 'Bóng đêm chưa kết thúc'
		},
		dialog_sent: {
			title: 'Lỗi đã được gửi báo cáo',
			desc: 'Báo cáo về lỗi đã gửi thành công. ID của lỗi là:'
		},
		dialog_send_failure: {
			title: 'Gửi thất bại',
			desc: 'Lỗi dưới đây xảy ra khi đang gửi báo cáo:'
		}
	},
	building: {
		playerbase: {
			short: 'Kho',
			name: 'Nhà chính',
			plural: 'Nhà chính',
			desc: 'Các zombies sẽ phá hủy nó. Nó lưu trữ {resource/plural:crystal} được khai thác bởi {building/plural:crystalmine}.',
			upgrades: {
				playerbase_arrowtowers: {
					name: 'Tòa nhà bắn tên',
					desc: 'Cho phép xây tháp bắn tên. Mở khóa {building:sawmill}, {building:arrowfactory}, {building:arrowstorage} và {building:arrowtower}.'
				},
				playerbase_iron: {
					name: 'Sắt',
					desc: 'Dùng để lấy Sắt làm ra Đạn tốt hơn! Mở khóa {building:ironmine}'
				},
				playerbase_steel: {
					name: 'Thép',
					desc: 'Sản xuất ĐẠN từ THÉP tốt hơn. Mở khóa {building:coalmine} và {building:steelfactory}'
				},
				playerbase_electricity: {
					name: 'Điện',
					desc: 'Cho phép sản xuất và dùng năng lượng. Mở khóa{building:solarpanel}, {building:lightningtower}, và {building:powerstorage}.'
				},
				playerbase_further_defenses: {
					name: 'Tăng cường phòng thủ',
					desc: 'Mở khóa {building:spotlight} và {building:floorspikes} sẽ giúp bạn bảo vệ căn cứ.'
				},
				playerbase_nuclear: {
					name: 'Lò phản ứng hạt nhân',
					desc: 'Mở khóa {building:uraniummine} và {building:reactor} cho phép sản xuất nhiều năng lượng hơn {building/plural:solarpanel}.'
				},
				playerbase_resource_storage: {
					name: 'Kho tài nguyên',
					desc: 'Mở khóa {building:resourcestorage} cho phép lưu trữ {resource:rock}, {resource:tree}, {resource:iron}, {resource:coal} và {resource:uranium}'
				},
				playerbase_shields: {
					name: 'Lá chắn',
					desc: 'Mở khóa {building:shieldgenerator} sản xuất lá chắn cho tường để hấp thụ thiệt hại và chặn những chuỗi tấn công.'
				}
			}
		},
		researchlab: {
			short: 'Phòng thí nghiệm nghiên cứu',
			name: 'Phòng thí nghiệm nghiên cứu',
			plural: 'Phòng thí nghiệm nghiên cứu',
			desc: 'Sản xuất {resource/plural:head}.\nPhòng thí nghiệm thu hút zombie ngày càng mạnh hơn vào ban đêm.'
		},
		crystalmine: {
			short: 'Pha lê',
			name: 'Mỏ pha lê',
			plural: 'Mỏ pha lê',
			desc: 'Chứa nhiều {resource/plural:crystal}\nĐơn vị tiền tệ để xây dựng và nâng cấp nhà á!'
		},
		stonemine: { short: 'Đá', name: 'Mỏ đá', plural: 'Mỏ đá' },
		sawmill: {
			short: 'Máy cưa',
			name: 'Máy cưa',
			plural: 'Máy cưa',
			desc: 'Thu hoạch {resource/plural:tree} từ {mapentity/plural:tree}'
		},
		coalmine: {
			short: 'Than',
			name: 'Các Mỏ Than',
			plural: 'Các Mỏ Than',
			desc: 'Chiết xuất {resource/plural:coal} từ {mapentity/plural:coalore}'
		},
		ironmine: {
			short: 'Sắt',
			name: 'Quặng Sắt',
			plural: 'Những Quặng Sắt',
			desc: 'Chiết xuất {resource/plural:iron} từ {mapentity/plural:ironore}.'
		},
		uraniummine: {
			name: 'Quặng Uranium',
			plural: 'Những Quặng Uranium',
			desc: 'Chiết xuất {resource/plural:uranium} từ {mapentity/plural:uraniumore}.'
		},
		steelfactory: {
			short: 'Thép',
			name: 'Nhà máy Thép',
			plural: 'Những Nhà máy Thép',
			desc: 'Dùng {resource:iron} và {resource:coal} để sản xuất {resource:steel}.'
		},
		solarpanel: {
			short: 'Pin Mặt trời',
			name: 'Pin Mặt trời',
			plural: 'Những Pin Mặt trời',
			desc: 'Sản xuất {resource:power} vào ban ngày. Nghiên cứu để cho phép sử dụng dưới ánh trăng.',
			additional_info: 'Làm việc nhanh hơn ở bản đồ sa mạc, do có nhiều ánh mặt trời hơn.',
			upgrades: {
				solarpanel_night_25_efficient: {
					name: 'Ánh trăng I',
					desc: 'Cho phép sản xuất với 25% hiệu năng lúc ban đêm'
				},
				solarpanel_night_50_efficient: {
					name: 'Ánh trăng II',
					desc: 'Cho phép sản xuất với 50% hiệu năng lúc ban đêm'
				},
				solarpanel_night_100_efficient: {
					name: 'Ánh trăng III',
					desc: 'Cho phép sản xuất với 100% hiệu năng lúc ban đêm'
				}
			}
		},
		wall: {
			short: 'Thành',
			name: 'Thành',
			plural: 'Thành trì',
			desc: 'Bảo vệ căn cứ khỏi thây ma bằng cách chặn đường chúng.'
		},
		transporter: {
			short: 'Thiết bị lặp tín hiệu',
			name: 'Thiết bị lặp tín hiệu',
			plural: 'Thiết bị lặp tín hiệu',
			desc: 'Hỗ trợ sự mở rộng căn cứ bằng cách cho phép vận chuyển nguyên liệu xa hơn.',
			additional_info:
				'Càng đặt nhiều {building/plural:transporter}, chúng càng đắt. Ngoài ra, hiệu ứng có lợi không cộng dồn.',
			upgrades: {
				transporter_target_invisible: {
					name: 'Phát hiện tàng hình',
					desc: 'Cho phép các tháp gần phát hiện và tấn công thây ma tàng hình.'
				},
				transporter_defensive_20pct_faster: {
					name: 'Phòng thủ nhanh hơn',
					desc: 'Những tháp phòng thủ bắn nhanh hơn 20%'
				},
				transporter_defensive_50pct_faster: {
					name: 'Phòng thủ nhanh hơn II',
					desc: 'Những tháp phòng thủ bắn nhanh hơn 50%'
				},
				transporter_producers_15pct_faster: {
					name: 'Mỏ và Nhà máy',
					desc: 'Những mỏ và nhà máy gần đó sẽ sản xuất nhanh hơn 15%.'
				},
				transporter_producers_30pct_faster: {
					name: 'Mỏ và Nhà máy II',
					desc: 'Những mỏ và nhà máy gần đó sẽ sản xuất nhanh hơn 30%.'
				}
			}
		},
		arrowfactory: {
			short: 'Tên',
			name: 'Nhà máy Tên',
			plural: 'Những nhà máy Tên',
			desc: 'Sản xuất {resource/plural:woodarrow} được sử dụng bởi{building:arrowtower}. Nghiên cứu công nghệ để sản xuất thêm các loại tên khác.',
			upgrades: {
				arrowfactory_ironarrows: {
					name: 'Tên Sắt',
					desc: 'Cho phép sản xuất{resource/plural:ironarrow} dùng {resource/plural:iron} gây ra sát thương cao.'
				},
				arrowfactory_steelarrows: {
					name: 'Tên thép',
					desc: 'Cho phép sản xuất {resource/plural:steelarrow} dùng {resource/plural:steel} gây ra sát thương lớn hơn.'
				},
				arrowfactory_uraniumarrows: {
					name: 'Tên Uranium',
					desc: 'Cho phép sản xuất {resource/plural:uraniumarrow} dùng{resource/plural:uranium} gây ra sát thương khủng.'
				}
			}
		},
		shieldgenerator: {
			short: 'Lá chắn',
			name: 'Máy tạo Lá chắn',
			plural: 'Những Máy tạo Lá chắn',
			desc: 'Sản xuất lá chắn bảo vệ thành khỏi sát thương và chặn các đòn đánh lan.',
			additional_info:
				'Máy tạo lá chắn không thể cộng dồn. Thành luôn được cung cấp năng lượng bởi lá chắn lớn nhất trong tầm.',
			upgrades: {
				shieldgenerator_uranium: {
					name: 'Lá chắn Uranium',
					desc: 'Cho phép sản xuất lá chắn từ {resource/plural:uranium} thay vì {resource/plural:iron} và sản xuất nhanh hơn trong khi dùng ít tài nguyên hơn.'
				}
			}
		},
		arrowtower: {
			short: 'Tên',
			name: 'Tháp tên',
			plural: 'Tháp Tên',
			desc: 'Dùng Tên ở {building:arrowfactory} bắn thây ma.',
			additional_info: 'Không thể xuyên giáp. Nâng cấp lên nỏ để bắn thây ma có giáp',
			upgrades: {
				arrowtower_essentials: { name: 'Thiết yếu', desc: 'Tăng tầm đánh và tốc độ ngắm' },
				arrowtower_path_a_fast_aim: { name: 'Ngắm nhanh hơn', desc: 'Tăng tốc độ ngắm' },
				arrowtower_path_a_double_shot: {
					name: 'Bắn 2 phát',
					desc: 'Bắn 2 mũi tên một lúc. Cần gấp đôi tài nguyên. Cũng tăng thêm dung lượng kho chứa.'
				},
				arrowtower_path_a_triple_shot: {
					name: 'Bắn 3 phát',
					desc: 'Bắn 3 mũi tên một lúc. Cần gấp 3 lần tài nguyên. Cũng tăng thêm dung lượng kho chứa.'
				},
				arrowtower_path_b_more_range: { name: 'Tầm bắn xa', desc: 'Tăng bán kính bắn.' },
				arrowtower_path_b_more_range_2: {
					name: 'Tầm bắn xa II',
					desc: 'Tăng bán kính bắn.'
				},
				arrowtower_path_b_crossbow: {
					name: 'Nỏ',
					desc: 'Tăng tầm bắn, tăng sát thương cơ bản đáng kể, nhưng bắn và ngắm chậm hơn. Vì lực bắn mạnh, có thể xuyên giáp.'
				},
				arrowtower_path_b_hard_hit: {
					name: 'Bắn',
					desc: 'Đạn đạo nhanh và mạnh để đẩy lùi thây ma. Ngoài ra, tăng sát thương cơ bản.'
				}
			}
		},
		floorspikes: {
			short: 'Hầm chông',
			name: 'Hầm chông',
			plural: 'Hầm chông',
			desc: 'Tiêu thụ {resource:power} để duy trì hầm chông để gây sát thương thây ma khi bước qua.',
			additional_info:
				'Thây ma không tấn công nó, nhưng thây ma bị nổ vẫn gây thiệt hại cho hầm chông.'
		},
		lightningtower: {
			short: 'Sấm sét',
			name: 'Tháp Sét',
			plural: 'Những Tháp Sét',
			additional_info: 'Gây thêm sát thương vào thây ma có giáp, vì giáp dẫn điện.',
			upgrades: {
				lightningtower_more_range: { name: 'Tầm bắn xa', desc: 'Tăng tầm bắn của tháp' },
				lightningtower_chain_further: {
					name: 'Nảy hồ quang',
					desc: 'Giúp hồ quang nhảy nhiều hơn để giật nhiều thây ma hơn.'
				},
				lightningtower_faster: { name: 'Nhanh nữa', desc: 'Giúp tháp bắn nhanh hơn!' },
				lightningtower_burst: {
					name: 'Tụ điện',
					desc: 'Hồ quang không thể nhảy được nhưng gây lượng sát thương khủng. Tốn nhiều tài nguyên hơn'
				},
				lightningtower_burst_2: {
					name: 'Tụ điện II',
					desc: 'Cho phép gây nhiều sát thương hơn với cùng lượng tài nguyên'
				},
				lightningtower_stun: {
					name: 'Choáng',
					desc: 'Choáng toàn bộ kẻ địch trúng phải trong thời gian ngắn bởi hồ quang.'
				},
				lightningtower_chain_2: {
					name: 'Nảy hồ quang II',
					desc: 'Cho phép hồ quang nhảy xa hơn giúp tiêu diệt gọn một nhóm thây ma cùng một lần.'
				}
			}
		},
		lasertower: {
			short: 'Laze',
			name: 'Tháp Laze',
			plural: 'Những Tháp Laze',
			desc: 'Dùng {resource:power} để bắn laze vào thây ma',
			upgrades: {
				lasertower_range_1: { name: 'Tầm bắn I', desc: 'Tăng tầm bắn của laze.' },
				lasertower_range_2: { name: 'Tầm bắn II', desc: 'Tăng tầm bắn của laze hơn nữa.' },
				lasertower_range_3: {
					name: 'Tầm bắn III',
					desc: 'Tăng tầm bắn của laze lên khủng khiếp.'
				},
				lasertower_range_4: {
					name: 'Tầm bắn IV',
					desc: 'Tăng tầm bắn của laze lên mức quá OP'
				},
				lasertower_faster_aim: {
					name: 'Bắn nhanh hơn',
					desc: 'Ngắm laze và bắn nhanh hơn, để tấn công nhanh hơn.'
				},
				lasertower_stronger: {
					name: 'Thêm sát thương',
					desc: 'Gấp đôi sát thương laze, yêu cầu nhiều tài nguyên hơn.'
				},
				lasertower_more_storage: {
					name: 'Kho lớn hơn',
					desc: 'Nhân 3 lần kho laze để chứa nhiều tài nguyên hơn.'
				}
			}
		},
		cannonballfactory: {
			short: 'Đạn pháo',
			name: 'Nhà máy Đạn pháo',
			plural: 'Những Nhà máy Đạn pháo',
			desc: 'Chuyển {resource:rock} thành đạn pháo sử dụng cho {building/plural:cannon}. Nghiên cứu để tăng sản xuất đạn dược.',
			upgrades: {
				cannonballfactory_ironballs: {
					name: 'Đạn sắt',
					desc: 'Cho phép sản xuất {resource/plural:ironcannonball} dùng {resource/plural:iron} gây thêm sát thương'
				},
				cannonballfactory_steelballs: {
					name: 'Đạn Thép',
					desc: 'Cho phép sản xuất {resource/plural:steelcannonball} dùng {resource/plural:steel} gây ra sát thương lớn hơn.'
				},
				cannonballfactory_uraniumballs: {
					name: 'Đạn Uranium',
					desc: 'Cho phép sản xuất {resource/plural:uraniumcannonball} dùng {resource/plural:uranium} gây ra sát thương khủng.'
				}
			}
		},
		cannon: {
			short: 'Pháo',
			name: 'Pháo',
			plural: 'Pháo',
			desc: 'Bắn thây ma với đạn sản xuất từ {building:cannonballfactory}.',
			upgrades: {
				cannon_more_range: { name: 'Tăng tầm', desc: 'Tăng tầm đánh' },
				cannon_faster_aim: {
					name: 'Ngắm nhanh hơn',
					desc: 'Làm cho pháo ngắm kẻ thù nhanh hơn.'
				},
				cannon_machine_gun: {
					name: 'Súng máy',
					desc: 'Bắn cực nhanh. Đạn đạo nhanh và đạn rất nhanh - Chuẩn bị cung cấp đạn dược thật nhiều!'
				},
				cannon_machine_gun_2: { name: 'Súng máy II', desc: 'Bắn và ngắm nhanh hơn nữa!' },
				cannon_catapult: {
					name: 'Máy bắn đá',
					desc: 'Chuyển thành máy bắn đá. Bắn và ngắm rất chậm. Tầm diện rộng, bán kính sát thương lớn'
				},
				cannon_catapult_2: {
					name: 'Máy bắn đá II',
					desc: 'Đạn bay nhanh hơn, nên dễ trúng hơn.'
				},
				cannon_catapult_3: {
					name: 'Máy bắn đá III',
					desc: 'Kết hợp 3 viên đạn gây nhiều sát thương ở bán kính lớn hơn và làm choáng kẻ địch trong thời gian ngắn.'
				}
			}
		},
		powerstorage: {
			short: 'Kho năng lượng',
			name: 'Kho năng lượng',
			plural: 'Kho năng lượng',
			desc: 'Chứa dư {resource:power} và cung cấp năng lượng khi cần'
		},
		spotlight: {
			short: 'Điểm sáng',
			name: 'Điểm sáng',
			plural: 'Điểm sáng',
			desc: 'Dùng năng lượng duy trì nguồn sáng mạnh đốt cháy và làm rối loạn kẻ địch',
			upgrades: {
				spotlight_slowmove_1: {
					name: 'Làm chậm bước đi',
					desc: 'Thây ma bị phân tâm bởi điểm sáng và di chuyển chậm hơn. Hơn nữa, thây ma tàng hình bị phát hiện trong thời gian ngắn'
				},
				spotlight_slowattack_1: {
					name: 'Làm chậm tấn công',
					desc: 'Đánh lạc hướng thây ma và làm chúng tấn công ít thường xuyên hơn.'
				},
				spotlight_moredamage_1: {
					name: 'Hiệu quả sát thương',
					desc: 'Nghiên cứu để gây thêm sát thương với một lượng tài nguyên tương đương.'
				},
				spotlight_leds: {
					desc: 'Chuyển sang công nghệ LED. Giảm sát thương nhưng làm cho điểm sáng di chuyển nhanh hơn và tiêu tốn ít tài nguyên hơn. Hơn nữa, làm chậm tốc độ di chuyển và tốc độ tấn công.'
				},
				spotlight_leds_2: {
					desc: 'Tăng làm chậm đòn tấn công và di chuyển một cách kinh khủng!'
				},
				spotlight_maxdamage: {
					name: 'Sát thương tối đa',
					desc: 'Ngắm chậm hơn, nhưng gây ra sát thương hơn với cùng lượng tài nguyên.'
				},
				spotlight_maxdamage_2: {
					name: 'Thêm sát thương',
					desc: 'Gây nhiều sát thương hơn nữa nhưng cho phép trữ nhiều tài nguyên và làm tăng nhẹ tấn công ,làm chậm và tốc độ ngắm'
				}
			}
		},
		reactor: {
			short: 'Lò phản ứng',
			name: 'Lò phản ứng hạt nhân',
			plural: 'Lò phản ứng hạt nhân',
			desc: 'Sản xuất {resource:power} từ {resource:uranium}.',
			additional_info: 'Do độc tính của nó, thây ma xung quanh trở nên mạnh hơn'
		},
		cannonstorage: {
			short: 'Kho chứa đạn pháo',
			name: 'Kho chứa đạn pháo',
			plural: 'Những Kho chứa đạn pháo',
			desc: 'Chứa đạn dư thừa cho {building:cannon} và cung cấp khi cần.',
			upgrades: {
				cannonstorage_ironballs: {
					name: 'Đạn Sắt',
					desc: 'Cho phép nhà kho chứa {resource/plural:ironcannonball}'
				},
				cannonstorage_steelballs: {
					name: 'Đạn Thép',
					desc: 'Cho phép nhà kho chứa {resource/plural:steelcannonball}'
				},
				cannonstorage_uraniumballs: {
					name: 'Đạn Uranium',
					desc: 'Cho phép nhà kho chứa{resource/plural:uraniumcannonball}'
				}
			}
		},
		arrowstorage: {
			short: 'Kho chứ Tên',
			name: 'Kho chứa Tên',
			plural: 'Những Kho chứa Tên',
			desc: 'Chứa dư tên cho {building:arrowtower} và gởi nó khi cần.',
			upgrades: {
				arrowstorage_ironarrows: {
					name: 'Tên Sắt',
					desc: 'Cho phép nhà kho chứa {resource/plural:ironarrow}.'
				},
				arrowstorage_steelarrows: {
					name: 'Tên Thép',
					desc: 'Cho phép nhà kho chứa {resource/plural:steelarrow}.'
				},
				arrowstorage_uraniumarrows: {
					name: 'Tên Uranium',
					desc: 'Cho phép nhà kho chứa {resource/plural:uraniumarrow}.'
				}
			}
		},
		resourcestorage: {
			short: 'Kho chứa tài nguyên',
			name: 'Kho chứa tài nguyên',
			plural: 'Kho chứa tài nguyên',
			desc: 'Cho phép chứa {resource:rock}, {resource:tree}, {resource:coal}, {resource:iron} ,{resource:uranium} và cung cấp khi cần. Tốt nhất nên đặt gần nhà máy để chúng không bị tình trạng thiếu tài nguyên khi vận chuyển quá xa.'
		},
		zombiefactory: {
			short: 'Nơi sinh sản thây ma',
			name: 'Nơi sinh sản thây ma',
			plural: 'Nơi sinh sản thây ma',
			desc: 'Sinh thây ma để tấn công đối thủ!',
			upgrades: {
				zombiefactory_archers: {
					name: 'Thây ma cung thủ',
					desc: 'Cho phép sinh thây ma cung thủ. Chúng là thây ma tầm xa và máu thấp.'
				},
				zombiefactory_axe: {
					name: 'Thây ma rìu',
					desc: 'Cho phép sinh thây ma rìu. Chúng có nhiều máu và sát thương hơn thây ma thường nhưng chậm hơn.'
				},
				zombiefactory_exploding: {
					name: 'Thây ma cảm tử',
					desc: 'Cho phép sinh ra thây ma cảm tử. Nhanh và phát nổ khi chạm vào công trình kẻ thủ, tuy nhiên lại máu thấp.'
				},
				zombiefactory_mage: {
					name: 'Pháp sư thây ma',
					desc: 'Cho phép sản xuất pháp sư thây ma. Pháp sư thây ma tấn công bằng điện hồ quang và lan ra nhiều công trình'
				},
				zombiefactory_spawner: {
					name: 'Trùm Thây ma Sinh sản',
					desc: 'Cho phép sinh Trùm Thây ma Sinh sản. Chúng sinh ra các thây ma đồng minh để hỗ trợ chúng trong chiến trận.'
				}
			}
		}
	},
	challenges: {
		title: 'Thử thách và kỹ năng.',
		desc: 'Hoàn thành thử thách để kiếm điểm kỹ năng cho cây kĩ năng trong tài khoản của bạn vĩnh viễn!'
	},
	changelog: { title: 'Sự thay đổi' },
	common_dialogs: {
		delete_old_savegame_dialog: {
			title: 'Xóa game cũ',
			text: 'Bắt đầu game mới sẽ xóa vĩnh viễn file lưu game cũ!'
		}
	},
	common: {
		loading: 'Đang tải',
		error: 'Lỗi',
		failure: 'Thất bại',
		video_load_error: 'Video không có sẵn, hãy chắc chắn bạn có kết nối internet',
		click_to_unlock: 'Nhấp vào để mở khóa',
		download_additional_resources: 'Đang tải các tập tài nguyên hỗ trợ.',
		tutorial: 'Hướng dẫn',
		translation_progress: '%amount% đã dịch',
		copy: 'Sao chép',
		exit_app: 'Thoát',
		keybindings: {},
		loading_overlay: {},
		number_format: { infinite: 'vô tận' },
		time: {
			one_second_before: '1 giây trước',
			seconds_before: '%amount% giây trước',
			one_minute_before: '1 phút trước',
			minutes_before: '%amount% phút trước',
			one_hour_before: '1 giờ trước',
			hours_before: '%amount% giờ trước',
			one_day_before: '1 ngày trước',
			days_before: '%amount% ngày trước',
			seconds_short: '%seconds% giây',
			minutes_seconds_short: '%minutes%ph %seconds%giây'
		},
		singleplayer: 'Chơi đơn',
		multiplayer: 'Nhiều người chơi',
		synchronizing_save: 'Đồng bộ với máy chủ',
		x_coins: '%amount% đồng vàng',
		viewing_ad: 'Đang tải quảng cáo'
	},
	copyright: {
		title: 'Bản quyền',
		long_title: 'Bản quyền và giấy phép',
		contact: {
			title: 'Liên hệ',
			text: 'Nếu bạn có bất kì câu hỏi, gợi ý hoặc phản hồi, đừng ngại, hãy liên lạc với tôi:'
		},
		imprint: {
			title: 'Hợp pháp',
			text_privacy:
				'Cho nhà xuất bản, bản quyền và chính sách bảo mật, vui lòng xem %imprint% và %privacy_policy%',
			full_imprint: 'Điều khoản dịch vụ',
			privacy_policy: 'Chính sách bảo mật'
		},
		noteable_people: {
			title: 'Những người hỗ trợ',
			text: 'Cảm ơn tới toàn bộ những người đã giúp test và dịch ứng dụng! Đặc biệt cảm ơn những người sau:'
		}
	},
	dialog_buttons: {
		cancel: 'Hủy',
		abort: 'Hủy',
		delete: 'Xóa',
		confirm: 'Xác nhận',
		download: 'Tải xuống',
		retry: 'Thử lại',
		play_offline: 'Chơi Offline',
		unlock: 'Mở khóa',
		purchase: 'Mua',
		select: 'Chọn',
		choose: 'Chọn',
		ignore: 'Lờ đi',
		destroy: 'Phá hủy',
		restart: 'Khởi động',
		later: 'Để sau',
		unlink: 'Hủy link',
		logout: 'Đăng xuất',
		choose_anyways: 'Vẫn chọn',
		reset: 'Lại từ đầu',
		play_anyways: 'Vẫn chơi',
		place_anyways: 'Vẫn đặt',
		get_standalone: 'Mua trên steam',
		install: 'cài đặt',
		play_singleplayer: 'Chơi đơn',
		play: 'Chơi',
		view_changelog: 'Xem thay đổi',
		visit_discord: 'Thăm Discord'
	},
	enemies: {
		basic_zombie: { title: 'Thây ma thường', desc: 'Thây ma cận chiến cơ bản' },
		axe_zombie: { title: 'Thây ma rìu', desc: 'Thây ma cận chiến nhưng mạnh hơn' },
		archer_zombie: { title: 'Thây ma cung thủ', desc: 'Bắn công trình bằng tên!' },
		armored_axe_zombie: {
			title: 'Thây ma rìu có giáp',
			desc: 'Được giáp bảo vệ, miễn nhiễm{building/plural:arrowtower}.'
		},
		exploding_zombie: {
			title: 'Thây ma cảm tử',
			desc: 'Rất nhanh và sẽ nổ khi tiếp cân công trình.'
		},
		invisible_zombie: {
			title: 'Thây ma tàng hình',
			desc: 'Thây ma này lén lút và nhanh nhạy, nghiên cứu {building/plural:transporter} để các tháp có thể thấy được chúng.'
		},
		mage_zombie: {
			title: 'Thây ma pháp sư',
			desc: 'Tấn công căn cứ bằng hồ quang. Hồ quang sẽ không nảy nếu được chặn bởi lá chắn.'
		},
		spawner_boss_zombie: {
			title: 'Trùm sinh sản',
			desc: 'Tấn công căn cứ bằng điện hồ quang và sinh ra thây ma đồng minh.'
		},
		pulse_zombie: {
			title: 'Trùm xung kích',
			desc: 'Sinh ra thây ma đồng minh và sinh ra sóng xung kích vô hiệu hóa công trình gần đó.'
		}
	},
	game: {
		consumer_priority: {
			none: 'Không',
			low: 'Thấp',
			regular: 'Thường',
			high: 'Cao',
			maximum: 'Cao nhất'
		},
		buffs: {
			defensive_towers_20_pct_faster: {
				title: 'Tốc độ tháp phòng thủ +20%',
				receiver_title: 'Tốc độ đánh +20%'
			},
			defensive_towers_50_pct_faster: {
				title: 'Tốc độ tháp phòng thủ +50%',
				receiver_title: 'Tốc độ đánh +50%'
			},
			can_target_invisible: {
				title: 'Cho phép ngắm vào thây ma tàng hình',
				receiver_title: 'Ngắm vào thây ma vô hình'
			},
			mines_and_factories_15_pct_faster: {
				title: 'Mỏ và nhà máy tăng tốc 15%',
				receiver_title: 'Tốc độ sản xuất +15%'
			},
			mines_and_factories_30_pct_faster: {
				title: 'Mỏ và nhà máy tăng tốc 30%',
				receiver_title: 'Tốc độ sản xuất +30%'
			},
			travel_speed_plus_50_pct: { title: 'Tốc độ vận chuyển tài nguyên +50%' },
			travel_speed_plus_100_pct: { title: 'Tốc độ vận chuyển tài nguyên +100%' },
			powerup_arrow_25_pct: { title: 'Sức mạnh tên I' },
			powerup_arrow_50_pct: { title: 'Sức mạnh tên II' },
			powerup_arrow_150_pct: { title: 'Sức mạnh tên III' },
			powerup_crystal_50_pct: {},
			powerup_crystal_75_pct: {},
			powerup_crystal_100_pct: {},
			powerup_cannon_25_pct: {},
			powerup_cannon_50_pct: {},
			powerup_cannon_150_pct: {}
		},
		building_restrictions: { nearby_resource_placement: {}, unique: {} },
		building_requirements: {
			unlocked_base_upgrade: {},
			singleplayer_only: {},
			resource_produced: {},
			unlock_by_time: {},
			skill_unlocked: {}
		},
		placement_issues: {},
		difficulties: {
			sandbox: {
				title: 'Nhi đồng',
				desc: 'Pha lê vô tận và thiết yếu. Không có thêm kinh nghiệm và thành tựu.'
			},
			easy: {
				title: 'Dễ',
				desc: 'Thây ma ít và yếu, nâng cấp công trình rẻ, dễ học. Chỉ kiếm được 50% kinh nghiệm!'
			},
			medium: {
				title: 'Trung bình',
				desc: 'Thây ma có số lượng, sức mạnh và giá nâng cấp trung bình nhưng khó hơn chế độ dễ.'
			},
			hard: {
				title: 'Khó',
				desc: 'Nhiều thây ma mạnh, nâng cấp đắt đỏ, chỉ dành cho dân chuyên. Kiếm gấp đôi kinh nghiệm vì độ khó.'
			},
			multiplayer: { title: 'Nhiều người chơi', desc: 'Trận nhiều người chơi' }
		},
		linear_enhancements: {
			health: {
				title: 'Máu',
				desc: 'Tăng máu tối đa cho công trình. Tăng máu cho {building:playerbase} sẽ tăng máu cho tất cả công trình trừ {building/plural:wall}'
			},
			speed: {
				title: 'Tốc độ',
				desc: 'Tăng tốc đào mỏ, giá trị hiển thị là giá trị của tốc độ khai thác tài nguyên.'
			},
			damage: {
				title: 'Sát thương',
				desc: 'Tăng sát thương cho căn cứ, đạn mạnh hơn và gây nhiều sát thương hơn.'
			},
			storage: { title: 'Kho', desc: 'Tăng lượng tài nguyên có thể trữ.' },
			capacity: {
				title: 'Sản xuất',
				desc: 'Tăng tối đa lượng tài nguyên có thể sản xuất. Giá trị hiển thị cho thấy có tốc độ tài nguyên mỗi giây, giả định rằng đủ tài nguyên tự nhiên để khai thác.'
			},
			spawnlevel: {
				title: 'Cấp độ của thây ma',
				desc: 'Tăng cấp độ của thây ma được sinh ra, tăng đáng kể sát thương và tốc độ tấn công.'
			}
		}
	},
	gameover: {
		title: 'Kết thúc!',
		text: 'Bạn đã bị thây ma tiêu diệt!',
		try_again: 'Thử lại',
		statistics: {
			time_played: 'Thời gian đã chơi',
			day_reached: 'Sinh tồn ban đêm',
			exp_gained: 'EXP kiếm được',
			zombies_killed: 'Thây ma giết được',
			layout: 'Bố trí bản đồ',
			difficulty: 'Độ khó'
		},
		mp_lost: 'Bạn đã thua!',
		mp_won: 'Bạn thắng!',
		mp_won_desc: 'Hắn ta không có cơ hội nào',
		mp_lost_desc: 'Có lẽ lần sau!',
		mp_back_to_menu: 'Quay lại menu'
	},
	hud: {
		no_cost: 'Không tốn',
		save_indicator: { saving: 'Đang lưu' },
		resource_indicator: { loading: 'Tải xuống: %progress%' },
		offline_indicator: {
			offline: 'Ngoại tuyến',
			dialog_info: {
				title: 'Lỗi đồng bộ',
				desc: 'Server từ chối file lưu game của bạn:',
				disclaimer:
					'File lưu game của bạn không hợp lệ cho bảng tổng sắp và bạn sẽ không nhân được Kinh nghiệm hay Thành tựu.'
			},
			info_mods: { title: 'Đồng bộ hóa đã bị tắt' },
			sync_initializing_error: 'Đồng bộ vẫn đang hoạt động, hãy chờ một lát'
		},
		side_hints: {
			show_tutorial: 'Chỉ tôi cách làm',
			join_discord: 'Vào Discord',
			view_on_steam: 'Xem trên Steam',
			visit_shop: 'Thăm cửa hàng',
			play_multiplayer: 'Chơi nhiều người',
			show_mods: 'Xem các Mods',
			db: {
				invisible_zombie:
					'Một thây ma tàng hình đã xuất hiện! Nghiên cứu {building/plural:transporter} để nhìn thấy nó!',
				cannonballfactory_upgrade_available:
					'Nghiên cứu {building:cannonballfactory} để sản xuất ra đạn dược mạnh hơn bằng cách sử dụng {resource:iron}!',
				initial_skill_available:
					'Bạn có đủ {resource/plural:head} để mở khóa {building:researchlab}!',
				day_5_discord:
					'Bối rối? Cần giúp đỡ? Vào Discord chính thức của chúng tôi và chúng tôi sẽ cố gắng giúp bạn!',
				day_25_standalone:
					'Thích trò chơi này không? Phiên bản độc quyền trên Steam có đầy đủ các màn và độ khó đã được mở khóa, thêm cả một skin đặc biệt cho thây ma với không quảng cáo!',
				day_35_visit_shop:
					'Hãy chắc chắn tới cửa hàng để thấy nhiều skin ngầu và nhiều thứ khác!',
				day_43_vote_up: 'Upvote(agree) trò chơi để ủng hộ phát triển hơn!',
				day_50_praise: 'Chỉ 5% số người chơi đạt đến được ngày 50 trở lên - Xin chúc mừng!',
				day_70_multiplayer: 'Bạn nên thử chơi nhiều người, nó khá là vui đấy!',
				day_80_mods: 'Đang tìm kiếm thứ gì đó mới mẻ hơn à? Sao không thử sử dụng mods đi!',
				day_100_standalone:
					'Xin chúc mừng bạn đã đạt được ngày thứ 100! Nếu bạn chưa mua bản độc quyền, bạn chắc chắn nên!'
			}
		},
		pause_indicator: {},
		place_building: {},
		ingame_chat: {},
		buildings_category_dialog: {
			categories: { miners: {}, factories: {}, defensive: {}, others: {} },
			missing_resources_dialog: {}
		},
		achievement_notifications: {},
		ingame_announcements: {},
		network_overlay: {},
		building_tooltip: {
			priority: {},
			blueprint: {},
			spotlight: {},
			sell_confirmation_dlg: {},
			gravestone_collector: {},
			miner: { modes: {} },
			projectile_shooter: {},
			passive_producer: {},
			upgrades: {},
			periodic_damage: {},
			global_enhancements: { db: {} },
			enhancements: {},
			not_in_network: {},
			zombie_factory: {}
		},
		enhancement_tooltip: {
			db: { 'one-plus1': {}, 'one-plus10': {}, 'all-plus1': {}, 'same-level': {} }
		},
		resource_tooltip: {},
		powerup_tooltip: {},
		ingame_wiki: {},
		introduction_tut: {},
		destroy_indicator: {},
		ingame_settings: {},
		no_placement_spot_dialog: {},
		processing_overlay: {},
		mp_opponent_info: {},
		resource_statistics: {},
		dialog_prio_info: {},
		essence_packs_dialog: { success_dialog: {} },
		defense_view: {},
		mouse_actions: { db: {} },
		next_wave_info: { stronger_wave: {}, invisible_hint: {}, armored_hint: {} },
		skilltree: {}
	},
	keybindings: { dialog_edit: {}, dialog_reset: {}, dialog_reset_ok: {}, categories: {}, db: {} },
	leaderboard: { modes: {}, ranges: {} },
	load_savegame: {
		sync_failure_warning: {},
		stats: {},
		dialog_sync_failed: {},
		dialog_confirm_local_override: {}
	},
	login: {
		account_banned: {},
		account_vanished: {},
		login_error: {},
		steam_login_ticket_error_dialog: {}
	},
	main_menu: {
		offline_badge: {},
		version_badge: {},
		buttons: {},
		dialog_play_singleplayer_first: {
			title: 'Lời khuyên',
			desc: 'Chơi nhiều người có thể hơi khó khăn quá mức lúc đầu. Hãy chơi bản hướng dẫn một người trước!'
		}
	},
	mapentity: { crystal: {}, tree: {}, rock: {}, ironore: {}, coalore: {}, uraniumore: {} },
	maplayouts: { db: { tutorial: {}, desert: {}, ice: {}, multiplayer: {} } },
	match_modes: {
		db: { pvp_1v1: {}, pvp_1v1_ranked: {}, pvp_2v2: {}, pvp_2v2_ranked: {}, singleplayer: {} }
	},
	mods: {
		mod_warning: {},
		mod_installed_dialog: {},
		mod_uninstalled_dialog: {},
		dialog_no_mp: {},
		mod_gallery_fail: 'Failed to fetch mod gallery:'
	},
	mp_common: {
		match_aborted: {},
		login_failure: {},
		connect_timeout: {},
		disconnected_state: {},
		taking_too_long: {},
		dialog_no_modes: {},
		dialog_failed_to_select: {},
		history_db: {},
		division_categories: { bronce: 'Đồng', silver: 'Bạc', gold: 'Vàng', crystal: 'Pha lê' },
		divisions_db: {},
		unsupported_browser_dialog: {},
		lobby_creation_failed: 'Lỗi không thể tạo sảnh. Hãy kiểm tra kết nối mạng',
		matchmode_names: {},
		lobby_matchmode_desc: {},
		lobby_token_desc: 'Tell your friends the following token so they can join the lobby:',
		lobby_kicked_dialog: {}
	},
	perks: {
		categories: {},
		confirm_dialog: {},
		unlock_fail_dialog: {},
		unlock_success_dialog: {},
		toggle_fail_dialog: {},
		not_purchaseable: 'Không thể mua được',
		db: {
			transporter_collect_graves: {},
			allow_setting_priority: {},
			advanced_synchronization: {},
			map_desert: {},
			map_ice: {},
			difficulty_medium: {},
			difficulty_hard: {},
			difficulty_sandbox: {},
			skin_relaxed_basic_zombie: {},
			skin_present_exploding_zombie: {
				name: 'Quà Nổ',
				desc: 'Này, nhìn kìa, đó là một món quà ... BÙM! Oh. Áp dụng với thây ma nổ.'
			},
			skin_robinhood_archer_zombie: {
				desc: 'Cướp từ đối thủ của bạn và đưa cho bạn, hay là tôi đang xáo trộn lên nhỉ? Áp dụng với thây ma cung thủ.'
			},
			skin_golem_axe_zombie: {
				desc: 'Skin độc quyền cho thây ma rìu của bạn, bao gồm trong bản độc lập trên Steam.'
			},
			skin_hulk_armored_axe_zombie: {
				desc: 'Không nói nhiều, nhưng bạn có thể trông cậy vào anh ta. Áp dụng với những thây mà rìu đã trang bị giáp.'
			},
			skin_supporter_playerbase: {
				name: 'Cờ Ủng Hộ',
				desc: 'Ủng hộ nhà phát triển với chiếc cờ trái tim cực kì đắt này cho kho pha lê của bạn (có thể nhìn thấy trong chế độ nhiều người).'
			},
			no_ads: {}
		}
	},
	preload: {
		new_update_dialog: {},
		connection_error_dialog: {},
		initialization_failure: {},
		reset_app_warning: {},
		savegame_corrupt_dialog: {},
		unsupported_browser_dialog: {},
		no_local_storage_dialog: {
			desc: 'Your brower does not support thirdparty cookies or you have disabled it in your security settings. In Chrome this setting is called "Block third-party cookies and site data".'
		},
		mod_load_fail_dialog: {},
		status: {},
		maintenance_info: {}
	},
	purchase_dialog: {
		failure_dialog: {},
		purchased_dialog: {},
		need_diamonds_dialog: {},
		item_types: {},
		email_link_dialog: {},
		free_coins_fail_dialog: {}
	},
	recover_account: {
		dialog_invalid_email: {},
		dialog_recovery_request_fail: {},
		dialog_token_usage_failed: {},
		dialog_enter_token: {}
	},
	register: { errors: {}, terms_of_service: {}, error_dialog: {} },
	resource: {
		crystal: {},
		iron: {},
		rock: {},
		tree: {},
		woodarrow: { name: 'Mũi tên gỗ', plural: 'Mũi tên gỗ' },
		head: { name: 'Tinh chất', plural: 'Tinh chất' },
		coal: { name: 'Than', plural: 'Than' },
		steel: { name: 'Thép', plural: 'Thép' },
		power: { name: 'Điện', plural: 'Điện' },
		stonecannonball: { name: 'Đạn đá', plural: 'Đạn đá' },
		uranium: {},
		ironcannonball: {},
		steelcannonball: {},
		uraniumcannonball: {},
		ironarrow: {},
		steelarrow: {},
		uraniumarrow: {}
	},
	select_difficulty: {
		desc_standalone:
			'Hãy nghĩ tới việc sử dụng bản độc quyền để mở khóa mọi độ khó ngay lập tức!'
	},
	select_map: {
		desc_standalone:
			'Bạn có biết không? Bản độc quyền trên Steam đã mở khóa sẵn toàn bộ cách bố trí bản đồ sẵn rồi!'
	},
	settings: {
		apply_after_restart: {},
		categories: { app: { title: 'Toàn bộ' }, game: { title: 'Trò chơi' } },
		graphics_qualities: {
			low: {
				title: 'Thấp',
				desc: 'Tắt gần hết hiệu ứng. Chỉ dùng khi chế độ trung bình không hoạt động'
			},
			medium: {
				title: 'Trung bình',
				desc: 'Thiết lập mặc định, đề nghị cho phần lớn thiết bị. Cân bằng giữa hiệu suất và chất lượng.'
			},
			high: { title: 'Cao' },
			extreme: { title: 'Cực cao' }
		},
		uiScales: {
			super_small: 'Siêu nhỏ',
			small: 'Nhỏ',
			regular: 'Bình thường',
			large: 'Lớn',
			huge: 'Khổng lồ'
		},
		db: {
			language: {
				title: 'Ngôn ngữ',
				desc: 'Chọn ngôn ngữ bạn muốn dùng cho giao diện. Cần phải khởi động lại ứng dụng.'
			},
			graphicsQuality: {
				title: 'Chất lượng đồ họa',
				desc: 'Thay đổi chất lượng đồ họa có thể tăng hiệu suất và giảm lag. Nếu gặp lag, hãy giảm cấu hình xuống.'
			},
			uiScale: { title: 'Tỉ lệ giao diện' },
			fullscreen: {
				title: 'Toàn màn hình',
				desc: 'Bạn nên chơi trò chơi trong chế độ toàn màn hình để có được trải nghiệm tốt nhất. Chỉ có hiệu lực trong bản độc quyền.'
			},
			showKeybindings: { title: 'Phím tắt' },
			enableTutorial: { title: 'Hướng dẫn' },
			mobilePlacementUi: {},
			showBuildingLevels: { title: 'Xem các cấp độ' },
			pauseWhileUiOpen: {
				title: 'Tự động dừng',
				desc: 'Dừng game khi hướng dẫn hoặc câu thoại được mở. Đề nghị cho người mới chơi, chỉ có trong chơi đơn.'
			},
			stayInPlacementMode: { title: 'Đặt nhiều chỗ' },
			showSellConfirmation: { title: 'Xác nhận bán' },
			showWarningOnMissingResources: { title: 'Cảnh báo tài nguyên' },
			showZombieIndicators: {},
			automaticPlacementSuggestions: {
				title: 'Tự động đặt',
				desc: 'Tự động tìm một chỗ tốt và đề nghị nó khi xây công trình mới(Ví dụ như đặt mỏ pha lê cạnh pha lê). Đề nghị đặc biệt cho người mới chơi.'
			},
			showCrystalsDebt: {
				title: 'Xem pha lê đang nợ',
				desc: 'Thay vì cho xem bạn có bao nhiêu pha lê, sẽ cho bạn xem bạn có bao nhiêu pha lê sau khi tất cả bản thiết kế đã xong. Nếu bạn đặt nhiều bản thiết kế mà không đủ pha lê, pha lê của bạn sẽ ở mức âm.'
			},
			showMinimap: {
				title: 'Xem bản đồ nhỏ',
				desc: 'Hiển thị bản đồ nhỏ ở góc trên bên phải màn hình, giúp định vị và xem cảnh báo khi công trình bị phá hủy. Có thể ảnh hưởng xấu đến hiệu suất. Ẩn trên thiết bị di động.'
			},
			showFPS: {
				title: 'Hiển thị FPS',
				desc: 'Hiển thị khung hình hiện tại và tối đa trên giây. Có thể dùng để chấn đoán lag và tìm ra game hoạt động thế nào. Hiển thị khung hình có thể làm giảm hiệu suất!'
			},
			showActionPanel: {
				title: 'Hiển thị bảng điều khiển',
				desc: 'Hiển thị nút cho hoạt động của chuột ở phía dưới bên trái màn hình. Tự động ẩn cho thiết bị di động.'
			},
			showSameBuildingsOnPlacement: {
				title: 'Highlight công trình giống nhau',
				desc: 'Highlight tất cả công trình cùng loại khi đặt một công trình'
			}
		},
		mods: {
			installed_one: '1 mod đã được cài đặt',
			installed_n: '%installed% mod đã được cài đặt',
			manage: 'Quản lý mod'
		}
	},
	singleplayer_overview: {
		synchronizing_with_server: 'Đang đồng bộ với máy chủ',
		sync_error_hint:
			'Không thể đồng bộ với máy chủ. Bạn chỉ đang xem những file lưu game cục bộ, và bất kì game nào bạn bắt đầu sẽ không được đồng bộ tới khi tình trạng của bạn là trực tuyến trở lại.',
		advanced_sync:
			'10 game cuối của bạn đã được lưu trên máy chủ của chúng tôi. Tất cả game khác chỉ lưu cục bộ và mất khi bạn đăng xuất hay chuyển thiết bị.',
		past_savegames: 'File lưu game cũ',
		no_past_games:
			'Không có file lưu game cũ nào trên thiết bị - Có lẽ trên máy chủ chúng tôi có. Để chơi với chúng, hãy mua bộ đồng bộ nâng cao trong cửa hàng!',
		no_past_games_sync: 'Không có game cũ nào tim thấy',
		offline_savegame: 'Chỉ cho cục bộ',
		synced_savegame: 'Đã đồng bộ',
		modded_savegame: 'Đã có Mod',
		outdated_savegame: 'nhấp để cập nhật',
		need_download_savegame: 'nhấp để tải xuống',
		action_new_game: 'Game mới',
		dialog_adv_sync_enabled: {
			title: 'Cách hoạt động',
			desc: 'Từ giờ, 10 game cuối của bạn sẽ được lưu trên máy chủ của chúng tôi. Sẽ có hiệu lực ngay khi bạn bắt đầu chơi lại game cũ!'
		},
		exp_for_next_level: 'Lên cấp ở %amount% EXP',
		dialog_delete: {
			title: 'Xóa file lưu game',
			desc: 'Bạn có chắc khi xóa file lưu game vào ngày %day% ở bản đồ %map%? Nó sẽ bị xóa trên mọi tài khoản và không thể hoàn tác!(Bạn sẽ vẫn xuất hiện trên bảng tổng sắp).'
		}
	},
	skills: {
		stats: {
			mining_speed_increase: 'Tốc độ mỏ',
			factory_speed_increase: 'Tốc độ nhà máy',
			crystal_mines_building_rush:
				'Khi đặt công trình mới (trừ {building/plural:wall}), {building/plural:crystalmine} sẽ gấp rút sản xuất số lượng nhất định trong 10 giây.',
			crystal_mines_charge_pulse:
				'{building/plural:crystalmine} accumulate charges based on their level and dispatch them as a damage pulse once attacked by melee zombies.',
			essence_drop_increase: 'Thây ma thả thêm {resource/plural:head}.',
			crystal_drop_increase: 'Thây ma thả thêm {resource/plural:crystal}.',
			uraniummine_speed_increase: 'Mỏ {building/plural:uraniummine} nhanh hơn lượng đã cho.',
			ironmine_speed_increase: 'Mỏ {building/plural:ironmine} nhanh hơn lượng đã cho.',
			coalmine_speed_increase: 'Mỏ {building/plural:coalmine} nhanh hơn lượng đã cho.',
			stonemine_speed_increase: 'Mỏ {building/plural:stonemine} nhanh hơn lượng đã cho.',
			crystalmine_speed_increase: 'Mỏ {building/plural:crystalmine} nhanh hơn lượng đã cho.',
			all_mines_shields: 'Tất cả mỏ giờ có thể được bảo vệ bằng lá chắn.',
			build_duration_decrease:
				'Công trình giờ sẽ được xây nhanh hơn một lượng thời gian đã cho.',
			transporter_vision_radius_increase:
				'{building/plural:transporter} làm lộ diện thêm ô trên bản đồ.',
			shield_generator_radius_increase: 'Tăng bán kính của máy tạo lá chắn',
			arrowtower_bleeding_percent:
				'Tên làm kẻ thủ chảy máu, gây sát thương dựa trên máu tối đa và cấp độ của tháp.',
			arrowtower_bleeding_duration: 'Tăng thời gian chảy máu',
			arrowtower_slowdown_percent:
				'Kẻ thù bị trúng tên bị làm chậm 2 giây bằng một lượng đã cho.'
		},
		skills: {
			architecture: 'Kiến trúc',
			faster_cargo: 'Gói hàng nhanh hơn',
			rebuilding_glory: 'Vinh quang tái xây dựng',
			zombie_left_soul_extract: 'Thu thập linh hồn thây ma',
			zombie_chemical_extract: 'Trích xuất chất hóa học từ thây ma',
			core_protection: 'Sự bảo vệ cốt lõi',
			science_is_the_way: 'Khoa học là chính đạo!',
			new_methods: 'Phương thức mới',
			crystal_mines_building_rush: 'Xây dựng dồn dập',
			crystal_mines_shortcuts: 'Lối tắt của mỏ',
			crystal_mines_shields: 'Bảo vệ mỏ pha lê',
			crystal_mines_charge_pulse: 'Máy sàng lọc mỏ pha lê',
			crystal_mines_charge_pulse_intelligent: 'Bộ phát hiện máy sàng lọc thông minh',
			night_hp_regen: 'Việc ban đêm',
			advanced_optics: 'Thị giác cao cấp',
			advanced_signal_transmitter: 'Truyền tín hiệu nâng cao',
			mines_protection: 'Bảo vệ mỏ',
			faster_building: 'Xây nhanh hơn',
			arrowtower_piercing_arrows: 'Tên xuyên phá',
			arrowtower_let_them_bleed: 'Cho chúng chảy máu',
			arrowtower_sticky_arrows: 'Tên Dính'
		}
	},
	sync_savegame_mods: {
		dialog_needs_restart: {
			title: 'Cần khởi động lại',
			desc: 'Bạn đã thay đổi cấu hình của mod hoặc mod không thể nạp được. Hãy khởi động ứng dụng trước!'
		},
		sync_mods: 'Đồng bộ hóa Mod',
		savegame_mods: 'Lưu game Mod',
		your_mods: 'Mod của bạn',
		dialog_synced: {
			title: 'Các Mod đã được đồng bộ',
			desc: 'Các Mod của bạn đã được đồng bộ. Hãy khởi động lại ứng dụng.'
		}
	},
	tips: {
		upgrade_miners: 'Cải tiến thợ mỏ để tăng hiệu năng',
		place_transporters: 'Xây {building/plural:transporter} để mở rộng căn cứ.',
		spotlight_slowdown:
			'{building/plural:spotlight} có thể làm chậm thây ma khi đã được nghiên cứu.',
		performance: 'Bạn có thể giảm chất lượng đồ họa trong thiết lập nếu game bị giật lag!',
		walls: '{building/plural:wall}  có thể bảo vệ các công trình khỏi thây ma.',
		place_towers: 'Hãy đặt tháp để bảo vệ {building:playerbase}.',
		base_important: 'Khi {building:playerbase} bị phá hủy, bạn sẽ thua!',
		walking_dead: 'Xem The Walking Dead không giúp ích ở đây.',
		zombies_stronger: 'Thây ma trở nên mạnh hơn qua mỗi tối',
		achievements_diamonds: 'Bạn có thể kiếm thêm đồng vàng bằng cách hoàn thành thành tựu',
		auto_collect_gravestones:
			'Có một nhánh trong cửa hàng giúp {building/plural:transporter} tự động thu thập mộ đá!',
		use_zombie_heads: 'Nhớ sử dụng  {resource/plural:head} để mở khóa kĩ năng',
		streets: 'Đường phố được tự động xây dựng và sẽ tự hủy khi không cần.',
		playerbase_upgrade: 'Cải tiến {building:playerbase} để có thêm máu cho toàn bộ công trình',
		playerbase_towers: 'Nghiên cứu {building:playerbase} để mở thêm các loại tháp mới',
		game_modes_more_exp: 'Khi chơi ở độ khó càng cao, bạn sẽ có thêm nhiều điểm kinh nghiệm',
		single_dev: 'Trò chơi này được phát triển bởi duy nhất một nhà phát triển',
		pulse_zombie:
			'Thây ma sóng xung kích trùm sinh ra vào những ngày sau và vô hiệu hóa tất cả tháp trong tầm hoạt động!',
		invisible_zombie:
			'Thây ma tàng hình không thể bị chọn mục tiêu bởi tháp trừ khi nghiên cứu {building/plural:transporter} của bạn.',
		arrowtower_armor:
			'{building/plural:arrowtower} không thể bắn xuyên giáp và vô dụng trước thây ma có giáp.',
		arrowtower_research: 'Những Tháp Tên có công nghệ nọ có thể bắn xuyên giáp.',
		looking_for_challenge: 'Tìm kiếm thử thách ư? Hãy thử các chế độ khó hơn!',
		yorgio_players: 'Đã có hơn 2 triệu người chơi đã chơi bản gốc của YORG.io',
		enhancements:
			'Bạn có thể nghiên cứu lượng tháp nhiều nhất để mở khóa các tính năng mạnh mẽ!',
		powerups:
			'Mỗi bản đồ có những vùng thế mạnh giúp có thêm sức mạnh cộng thêm cho tháp của bạn trên toàn bản đồ. Hãy khám phá bản đồ để tìm chúng !',
		discord: 'Nếu bạn thích trò chơi này, hãy gia nhập Discord chính thức của chúng tôi!',
		tell_friends: 'Nếu bạn thích trò chơi này, hãy nhớ giới thiệu cho bạn mình nhé!'
	},
	tutorial: {
		requirements: {
			game_not_paused: 'Hãy quay lại trò chơi để tiếp tục phần hướng dẫn!',
			need_crystals:
				'Chúng ta cần thêm pha lê tới khi ta có thể tiếp tục. Hãy chờ tới khi {building/plural:crystalmine} sản xuất đủ!',
			any_tooltip_open: 'Nhấn escape hoặc nhấp vào công trình lại để tắt gợi ý công cụ.',
			close_skilltree: 'Nhấn escape hoặc nhấp vào nút X để đóng cây kĩ năng.'
		},
		user_did_not_follow:
			'Chà, có vẻ bạn không theo hướng dẫn của tôi nhỉ - Tôi không cản bạn, nhưng bạn nên biết mình đang làm gì!',
		place_crystalmine:
			'Này đằng ấy! Hãy xây một {building:crystalmine} để lấy thêm {resource/plural:crystal}!',
		wait_crystalmine_working:
			'Bạn vừa đặt một bản vẽ sẽ chuyển thành một {building:crystalmine} - Chờ tới khi nó sản xuất thêm {resource/plural:crystal}!',
		place_stonemine:
			'Đặt một {building:stonemine} gần mỏ {resource:rock} , chúng ta sẽ cần nó sớm thôi!',
		place_cannonballfactory:
			'Giờ hãy xây một {building:cannonballfactory} để cung cấp {resource:rock} cho {resource/plural:stonecannonball}!',
		wait_cannonballfactory:
			'Chờ tới khi {building:cannonballfactory} có đủ tài nguyên xây dựng.',
		place_cannon: 'Tuyệt! Để chống lại thây ma, hãy xây một {building:cannon}!',
		place_cannon_helper: 'Dời {building:cannon} tới địa điểm tôi đã chọn cho bạn.',
		place_other_crystalmines:
			'Hoàn hảo! Đặt thêm {building/plural:crystalmine} để tối ưu sự sản xuất pha lê.',
		place_other_stonemines:
			'Hãy đặt thêm {building/plural:stonemine} - Càng nhiều {resource:rock} càng nhiều {building:cannonballfactory} có được, càng sản xuất được nhiều.',
		enhance_crystalmine_tooltip: 'Nâng cấp mỏ để tăng tốc độ sản xuất',
		place_transporter: 'Để làm sáng vùng sương mù, xây một {building:transporter}.',
		place_transporter_placing:
			'{building/plural:transporter} giúp lộ diện sương mù ở trong tầm. Đặt nó vào vị trí chỉ định',
		place_transporter_placed:
			'Càng đặt nhiều {building/plural:transporter}, chúng càng đắt hơn - hãy cân nhắc khi đặt chúng',
		final_step:
			'Đó là tất cả tôi có thể giúp, và tôi sẽ quay lại sau - Cố gắng sống sót càng lâu càng tốt trong lúc ấy!'
	}
}, true)

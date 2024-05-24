/* eslint-disable */

/**
 * This file is generated by the build-schemas script.
 * Do not edit it manually.
 */

import {
	WP_Block_Template,
	WP_Error,
	WP_Network,
	WP_Post_Type,
	WP_Post,
	WP_Screen,
	WP_Site,
	WP_Term,
	WP_User,
} from 'wp-types';

export interface DataTypes {
	admin: AbstractData & Admin;
	assets: AbstractData & Assets;
	block_editor: AbstractData & Block_Editor;
	cache: AbstractData & Cache;
	caps: AbstractData & Caps;
	conditionals: AbstractData & Conditionals;
	db_queries: AbstractData & DB_Queries;
	doing_it_wrong: AbstractData & Doing_It_Wrong;
	environment: AbstractData & Environment;
	hooks: AbstractData & Hooks;
	http: AbstractData & HTTP;
	languages: AbstractData & Languages;
	logger: AbstractData & Logger;
	multisite: AbstractData & Multisite;
	overview: AbstractData & Overview;
	php_errors: AbstractData & PHP_Errors;
	raw_request: AbstractData & Raw_Request;
	redirect: AbstractData & Redirect;
	request: AbstractData & Request;
	theme: AbstractData & Theme;
	timing: AbstractData & Timing;
	transients: AbstractData & Transients;
}
export interface AbstractData {
	types: {
		[k: string]: number;
	};
	component_times: {
		[k: string]: {
			component: string;
			ltime: number;
			types: {
				[k: string]: number;
			};
		};
	};
}
/**
 * Admin screen data transfer object.
 */
export interface Admin {
	current_screen?: WP_Screen;
	hook_suffix: string;
	list_table?: {
		columns_filter: string;
		sortables_filter: string;
		column_action: string;
		class_name?: string;
	};
	pagenow: string;
	taxnow: string;
	typenow: string;
}
/**
 * Asset data transfer object.
 */
export interface Assets {
	assets?: Asset[];
	default_version: string;
	full_host: string;
	host: string;
	is_ssl: boolean;
	missing_dependencies: {
		[k: string]: true;
	};
	port: string;
}
export interface Asset {
	handle: string;
	position: "missing" | "broken" | "header" | "footer";
	host: string;
	port: string;
	source: string | WP_Error;
	local: boolean;
	ver: string;
	warning: boolean;
	display: string;
	dependents: string[];
	dependencies: string[];
	[k: string]: unknown;
}
/**
 * Block editor data transfer object.
 */
export interface Block_Editor {
	all_dynamic_blocks: string[];
	block_editor_enabled: boolean;
	has_block_context: boolean;
	has_block_timing: boolean;
	post_blocks: unknown[];
	post_has_blocks: boolean;
	total_blocks: number;
}
/**
 * Cache data transfer object.
 */
export interface Cache {
	has_object_cache: boolean;
	display_hit_rate_warning: boolean;
	has_opcode_cache: boolean;
	cache_hit_percentage: number;
	stats: {
		[k: string]: unknown;
	};
	object_cache_extensions: {
		[k: string]: boolean;
	};
	opcode_cache_extensions: {
		[k: string]: boolean;
	};
}
/**
 * User capability checks data transfer object.
 */
export interface Caps {
	caps: {
		args: unknown[];
		trace: Backtrace;
		result: boolean;
		name: string;
		user: string;
	}[];
}
/**
 * Class representing a backtrace.
 */
export interface Backtrace {
	component: Component;
	frames: FrameItem[];
}
/**
 * Class representing a component.
 */
export interface Component {
	type: string;
	name: string;
	context: string;
}
/**
 * Stack trace frame.
 */
export interface FrameItem {
	display: string;
	args: string[];
	calling_file: string;
	calling_line: number;
	file: string;
	function: string;
	id: string;
	line: number;
}
/**
 * Conditionals data transfer object.
 */
export interface Conditionals {
	conds: {
		true: string[];
		false: string[];
		na: string[];
	};
}
/**
 * Database queries data transfer object.
 */
export interface DB_Queries {
	total_qs: number;
	total_time: number;
	errors: number[];
	expensive?: number[];
	rows?: QueryRow[];
	has_result: boolean;
	has_trace: boolean;
	has_main_query: boolean;
	times?: {
		[k: string]: {
			caller: string;
			ltime: number;
			types: {
				[k: string]: number;
			};
		};
	};
	dupes: {
		query: string;
		count: number;
		ltime: number;
		callers: {
			[k: string]: number;
		};
		components: {
			[k: string]: number;
		};
		sources: {
			[k: string]: number;
		};
	}[];
}
export interface QueryRow {
	stack?: string[];
	sql: string;
	ltime: number;
	result?: number | boolean | WP_Error;
	type: string;
	trace?: Backtrace;
	is_main_query: boolean;
}
/**
 * Doing it Wrong data transfer object.
 */
export interface Doing_It_Wrong {
	actions: {
		trace: Backtrace;
		message: string;
	}[];
}
/**
 * Environment data transfer object.
 */
export interface Environment {
	php: {
		variables: {
			[k: string]: string | null;
		};
		version: string | false;
		sapi: string | false;
		user: string;
		old: boolean;
		extensions: {
			[k: string]: string;
		};
		error_reporting: number;
		error_levels: {
			[k: string]: boolean;
		};
	};
	db: {
		info: {
			"server-version": string;
			extension: string | null;
			"client-version": string | null;
			user: string;
			host: string;
			database: string;
		};
		variables: {
			Variable_name: string;
			Value: string;
		}[];
	};
	wp: {
		version: string;
		environment_type?: string;
		development_mode?: string;
		constants: {
			[k: string]: string;
		};
	};
	server: {
		name: string;
		version: string | null;
		address: string | null;
		host: string | null;
		OS: string | null;
		arch: string | null;
	};
}
/**
 * Hooks data transfer object.
 */
export interface Hooks {
	hooks: {
		name: string;
		actions: {
			priority: number;
			callback: {
				accepted_args: number;
				name?: string;
				file?: string | false;
				line?: number | false;
				error?: WP_Error;
				component?: Component;
			};
		}[];
		components: {
			[k: string]: string;
		};
	}[];
	components: {
		[k: string]: string;
	};
	all_hooks: boolean;
}
/**
 * HTTP data transfer object.
 */
export interface HTTP {
	http: {
		args: {
			method: string;
			timeout: number;
			redirection?: number;
			blocking?: boolean;
			sslverify?: boolean;
			[k: string]: unknown;
		};
		trace: Backtrace;
		info: {
			[k: string]: unknown;
		} | null;
		host: string;
		local: boolean;
		ltime: number;
		redirected_to: string | null;
		response:
			| {
					headers: {
						[k: string]: unknown;
					};
					body: string;
					response: {
						code: number;
						message: string;
					};
					cookies: {
						[k: string]: unknown;
					}[];
					filename: string | null;
					http_response: {
						[k: string]: unknown;
					};
			  }
			| WP_Error;
		type: string;
		url: string;
	}[];
	ltime: number;
	errors: {
		alert?: string[];
		warning?: string[];
	};
}
/**
 * Languages data transfer object.
 */
export interface Languages {
	languages: {
		caller: FrameItem | false;
		domain: string;
		file: string | false;
		found: number | false;
		handle: string | null;
		type: "gettext" | "jed" | "php" | "unknown";
	}[];
	locale: string;
	user_locale: string;
	determined_locale: string;
	language_attributes: string;
	/**
	 * MultilingualPress language.
	 */
	mlp_language: string;
	/**
	 * Polylang language.
	 */
	pll_language: string;
}
/**
 * Logger data transfer object.
 */
export interface Logger {
	logs: {
		message: string;
		trace: Backtrace;
		level: string;
	}[];
	warning_levels: string[];
}
/**
 * Multisite data transfer object.
 */
export interface Multisite {
	switches: {
		new: number;
		prev: number;
		to: boolean;
		trace: Backtrace;
	}[];
}
/**
 * Overview data transfer object.
 */
export interface Overview {
	time_taken?: number;
	time_limit: number;
	time_start: number;
	time_usage: number;
	memory: number;
	memory_limit: number;
	memory_usage: number;
	current_user?: {
		[k: string]: unknown;
	};
	switched_user?: {
		[k: string]: unknown;
	};
	display_time_usage_warning: boolean;
	display_memory_usage_warning: boolean;
	is_admin: boolean;
}
/**
 * PHP errors data transfer object.
 */
export interface PHP_Errors {
	errors?: {
		[k: string]: ErrorObject;
	};
}
export interface ErrorObject {
	errno: number;
	level: "warning" | "notice" | "strict" | "deprecated";
	suppressed: boolean;
	message: string;
	file: string | null;
	filename: string;
	line: number | null;
	trace?: Backtrace;
	count: number;
}
/**
 * Raw request data transfer object.
 */
export interface Raw_Request {
	request: {
		[k: string]: unknown;
	};
	response: {
		[k: string]: unknown;
	};
}
/**
 * Redirect data transfer object.
 */
export interface Redirect {
	trace?: Backtrace;
	location?: string;
	status?: number;
}
/**
 * Request data transfer object.
 */
export interface Request {
	user: {
		title: string;
		data: WP_User | false;
	};
	multisite: {
		current_site?: {
			title: string;
			data: WP_Site;
		};
		current_network?: {
			title: string;
			data: WP_Network;
		};
	};
	request: {
		request: string;
		matched_rule?: string;
		matched_query?: string;
		query_string: string;
	};
	qvars: {
		[k: string]:
			| string
			| unknown[]
			| {
					[k: string]: unknown;
			  };
	};
	queried_object?: {
		title: string;
		data?: WP_Term | WP_Post_Type | WP_Post | WP_User;
		type?: "WP_Term" | "WP_Post_Type" | "WP_Post" | "WP_User";
	};
	request_method: string;
	matching_rewrites: {
		[k: string]: string;
	};
}
/**
 * Theme data transfer object.
 */
export interface Theme {
	is_child_theme: boolean;
	stylesheet_theme_json: string;
	template_theme_json: string;
	block_template: WP_Block_Template | null;
	theme_dirs: {
		[k: string]: string;
	};
	theme_folders: {
		[k: string]: string;
	};
	stylesheet: string;
	template: string;
	theme_template_file: string;
	template_path: string;
	template_file?: string;
	template_hierarchy?: string[];
	timber_files?: string[];
	body_class?: string[];
	template_parts: {
		[k: string]: string;
	};
	theme_template_parts: {
		[k: string]: string;
	};
	count_template_parts: {
		[k: string]: number;
	};
	unsuccessful_template_parts: {
		[k: string]: unknown;
	}[];
}
/**
 * Timing data transfer object.
 */
export interface Timing {
	warning: {
		function: string;
		message: string;
		trace: Backtrace;
	}[];
	timing: {
		function: string;
		function_time: number;
		function_memory: number;
		laps: {
			[k: string]: {
				time: number;
				time_used: number;
				memory: number;
				memory_used: number;
				data: unknown;
			};
		};
		trace: Backtrace;
		start_time: number;
		end_time: number;
	}[];
}
/**
 * Transients data transfer object.
 */
export interface Transients {
	trans: {
		name: string;
		trace: Backtrace;
		type: "blog" | "site";
		value: unknown;
		expiration: number;
		exp_diff: string;
		size: number;
	}[];
	has_type: boolean;
}

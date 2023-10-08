<?php declare(strict_types = 1);
/**
 * This file is generated by the generate.mjs script.
 * Do not edit it manually.
 *
 * Source schema: src/schemas/data/admin.json
 */

/**
 * Admin screen data transfer object.
 *
 * @package query-monitor
 */

class QM_Data_Admin extends QM_Data {
	/**
	 * @var ?WP_Screen
	 */
	public $current_screen;

	/**
	 * @var string
	 */
	public $hook_suffix;

	/**
	 * @phpstan-var ?array{
	 *   columns_filter: string,
	 *   sortables_filter: string,
	 *   column_action: string,
	 *   class_name?: string,
	 * }
	 */
	public $list_table;

	/**
	 * @var string
	 */
	public $pagenow;

	/**
	 * @var string
	 */
	public $taxnow;

	/**
	 * @var string
	 */
	public $typenow;
}

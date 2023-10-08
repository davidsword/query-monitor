<?php declare(strict_types = 1);
/**
 * This file is generated by the generate.mjs script.
 * Do not edit it manually.
 *
 * Source schema: src/schemas/data/db_dupes.json
 */

/**
 * Duplicate database queries data transfer object.
 *
 * @package query-monitor
 */

class QM_Data_DB_Dupes extends QM_Data {
	/**
	 * @var int
	 */
	public $total_qs;

	/**
	 * @var array<string, array<string, int>>
	 */
	public $dupe_sources;

	/**
	 * @var array<string, array<string, int>>
	 */
	public $dupe_callers;

	/**
	 * @var array<string, array<string, int>>
	 */
	public $dupe_components;

	/**
	 * @var array<string, array<int, int>>
	 */
	public $dupes;

	/**
	 * @var array<string, float>
	 */
	public $dupe_times;
}

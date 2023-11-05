import { PanelContext } from './panel-context';
import {
	Table,
	Col,
} from './table';

import * as React from 'react';

interface Props<T> {
	title: string;
	cols: {
		[ key: string ]: Col<T>;
	};
	data: T[];
	hasError?: ( row: T ) => boolean;
	footer?: ( args: { cols: number, count: number, total: number, data: T[] } ) => React.ReactNode;
	children?: React.ReactNode;
}

export const TabularPanel = <T extends unknown>( { cols, data, footer, hasError, title, children }: Props<T> ) => {
	const {
		id,
	} = React.useContext( PanelContext );

	return (
		<div
			aria-labelledby="qm-panel-title"
			className="qm qm-panel-show"
			id={ `qm-${id}` }
			role="tabpanel"
			tabIndex={ -1 }
		>
			<Table
				cols={ cols }
				data={ data }
				id="qm-panel-table"
				footer={ footer }
				hasError={ hasError }
				title={ title }
			>
				{ children }
			</Table>
		</div>
	);
};

import test from 'ava';
import {templateTags} from '.';

test('evaluates valid JS', async t => {
	const ret = await templateTags[0].run('', 'new Date().toISOString().slice(0,10)');
	t.is(ret, new Date().toISOString().slice(0, 10));
});

test('throws on invalid js', async t => {
	await t.throws(async () => {
		templateTags[0].run('', 'new Datee()');
	}, {instanceOf: Error});
});

test('returns undefined promise on blank js', async t => {
	const ret = await templateTags[0].run('', '');
	t.is(ret, undefined);
});

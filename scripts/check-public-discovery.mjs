// Check built public output, without an account, network access, or production changes.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('.next/server/app');
const read = name => readFileSync(path.join(root, name), 'utf8');
const home = read('index.html');
const agents = read('agents.html');
const discovery = JSON.parse(read('agent.json.body'));
const text = read('llms.txt.body');
const service = 'https://wibee.wiserbond.com';

assert.match(home, /<title>Wibee(?:\s|\|)/);
assert.match(home, /property="og:title" content="Wibee/);
assert.match(home, /name="keywords" content="Wibee,위비,/);
assert.doesNotMatch(home, /name="keywords" content="[^"]*Akashic V2/);
assert.equal(discovery.name, 'Wibee');
assert.equal(discovery.schema, 'akashic.public-discovery/1');
assert.equal(discovery.setup, service + '/setup');
assert.equal(discovery.account, service + '/account');
assert.equal(discovery.connection_manifest, service + '/setup.json');
assert.equal(discovery.mcp.endpoint, service + '/mcp');
assert.equal(discovery.mcp.discovery, service + '/.well-known/oauth-protected-resource/mcp');
assert.match(discovery.mcp.authentication, /PKCE/);
assert.equal(discovery.capture_modes.paused, 'New agent contributions are blocked, including explicit save requests');
assert.ok(discovery.shared_tools.some(tool => tool.name === 'akashic_search_memory'));
assert.ok(discovery.primary_agent_tools.includes('akashic_forget_memory'));
assert.match(discovery.memory_states.temporary, /Unreviewed/);
assert.match(discovery.authority, /never higher-priority instructions/);
assert.match(text, /^# Wibee\n/);
assert.ok(text.includes(service + '/mcp'));
assert.doesNotMatch(agents, /https:\/\/akashic-v2\.onrender\.com/);
assert.match(read('archive/akashic-v1.html'), /Akashic Record/);
console.log('PASS: built branding, canonical discovery links, authorization/capture boundaries and preserved V1 archive. No live-host success asserted.');

const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.Particles,
		C3.Plugins.TiledBg,
		C3.Plugins.Spritefont2,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Acts.SetLayerInteractive,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.TileMovement.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar
	];
};
self.C3_JsPropNameTable = [
	{MovimentoEmGrid: 0},
	{player: 0},
	{safeFloor: 0},
	{broken: 0},
	{IceFloor: 0},
	{Solid: 0},
	{Tileset: 0},
	{Door: 0},
	{Sine: 0},
	{Key: 0},
	{Audio: 0},
	{Teleport: 0},
	{Teleport2: 0},
	{btnRestart: 0},
	{TitleGame: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{btnHome: 0},
	{btnNextLevel: 0},
	{Mouse: 0},
	{LevelComplete: 0},
	{Sprite: 0},
	{Touch: 0},
	{Keyboard: 0},
	{BtnPlay: 0},
	{Particles: 0},
	{Smoke: 0},
	{TiledBackground: 0},
	{LevelTxt: 0},
	{numberTxt: 0},
	{FloorDestroyed: 0},
	{SpriteFont: 0},
	{Smoke2: 0},
	{tilesetLava: 0},
	{btnModes: 0},
	{Tilemap: 0},
	{Sprite2: 0},
	{KeyCollected: 0}
];

self.InstanceType = {
	player: class extends self.ISpriteInstance {},
	safeFloor: class extends self.ISpriteInstance {},
	IceFloor: class extends self.ISpriteInstance {},
	Tileset: class extends self.ITilemapInstance {},
	Door: class extends self.ISpriteInstance {},
	Key: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Teleport: class extends self.ISpriteInstance {},
	Teleport2: class extends self.ISpriteInstance {},
	btnRestart: class extends self.ISpriteInstance {},
	TitleGame: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	btnHome: class extends self.ISpriteInstance {},
	btnNextLevel: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	BtnPlay: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Smoke: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	LevelTxt: class extends self.ISpriteInstance {},
	numberTxt: class extends self.ISpriteFontInstance {},
	FloorDestroyed: class extends self.ISpriteFontInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	Smoke2: class extends self.ISpriteInstance {},
	tilesetLava: class extends self.ISpriteInstance {},
	btnModes: class extends self.ISpriteInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}
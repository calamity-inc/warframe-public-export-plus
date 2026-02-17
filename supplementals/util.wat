(module
	(func (export "get_powersuit_scaling_values") (param $uniqueName_joaat i32) (param $rank i32) (result i32 i32 i32 i32 f64 i32)
		(local $health_add i32)
		(local $shield_add i32)
		(local $power_add i32)
		(local $armor_add i32)
		(local $ability_strength f64)
		(local $heal_rate i32)

		;; Zero-initialisation of locals is implied by WASM
		;;(local.set $health_add (i32.const 0))
		;;(local.set $shield_add (i32.const 0))
		;;(local.set $power_add (i32.const 0))
		;;(local.set $armor_add (i32.const 0))
		(local.set $ability_strength (f64.const 1.0))
		;;(local.set $heal_rate (i32.const 0))

		(local.set $health_add ;; (rank + 2) // 3 * 10
			(i32.mul
				(i32.div_u
					(i32.add (local.get $rank) (i32.const 2))
					(i32.const 3)
					)
				(i32.const 10)
				)
			)
		(local.set $shield_add ;; (rank + 1) // 3 * 10
			(i32.mul
				(i32.div_u
					(i32.add (local.get $rank) (i32.const 1))
					(i32.const 3)
					)
				(i32.const 10)
				)
			)
		(local.set $power_add ;; rank // 3 * 5
			(i32.mul
				(i32.div_u (local.get $rank) (i32.const 3))
				(i32.const 5)
				)
			)

		(block $ifs
			(if ;; Archwings
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 3444679363)) ;; /Lotus/Powersuits/Archwing/SupportJetPack/SupportJetPack
					(i32.eq (local.get $uniqueName_joaat) (i32.const 2320618526)) ;; /Lotus/Powersuits/Archwing/StealthJetPack/StealthJetPack
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 3667577307))) ;; /Lotus/Powersuits/Archwing/StandardJetPack/StandardJetPack
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 3158871569))) ;; /Lotus/Powersuits/Archwing/PrimeJetPack/PrimeJetPack
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 1155332988))) ;; /Lotus/Powersuits/Archwing/DemolitionJetPack/DemolitionJetPack
					)
				(then
					(local.set $health_add ;; (rank + 2) // 3 * 25
						(i32.mul
							(i32.div_u
								(i32.add (local.get $rank) (i32.const 2))
								(i32.const 3)
								)
							(i32.const 25)
							)
						)
					(local.set $shield_add (i32.shl (local.get $shield_add) (i32.const 1)))
					(br $ifs)
					)
				)

			(if
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 1876774746)) ;; /Lotus/Powersuits/Yareli/YareliPrime
					(i32.eq (local.get $uniqueName_joaat) (i32.const 2904123145)) ;; /Lotus/Powersuits/Yareli/Yareli
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 2586630162))) ;; /Lotus/Powersuits/Wisp/WispPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 1869477687))) ;; /Lotus/Powersuits/Wisp/Wisp
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 1029924323))) ;; /Lotus/Powersuits/Volt/VoltPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 1232457836))) ;; /Lotus/Powersuits/Saryn/SarynPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 1366859412))) ;; /Lotus/Powersuits/Pacifist/Pacifist
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 3661086025))) ;; /Lotus/Powersuits/Pacifist/BaruukPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 1424385072))) ;; /Lotus/Powersuits/Garuda/GarudaPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 1166258623))) ;; /Lotus/Powersuits/Garuda/Garuda
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 3427157693))) ;; /Lotus/Powersuits/Dragon/ChromaPrime
					)
				(then
					;; These frames get 10 power every 3 levels instead of 5
					(local.set $power_add (i32.shl (local.get $power_add) (i32.const 1)))
					(br $ifs)
					)
				)

			(if
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 1825683843)) ;; /Lotus/Powersuits/Sandman/Sandman
					(i32.eq (local.get $uniqueName_joaat) (i32.const 1025972283)) ;; /Lotus/Powersuits/Sandman/InarosPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 3990419848))) ;; /Lotus/Powersuits/Devourer/GrendelPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 2091939965))) ;; /Lotus/Powersuits/Devourer/Devourer
					)
				(then
					(local.set $health_add (i32.add (local.get $health_add) (local.get $shield_add)))
					(local.set $shield_add (i32.const 0))
					(br $ifs)
					)
				)

			(if
				(i32.eq (local.get $uniqueName_joaat) (i32.const 2614956317)) ;; /Lotus/Powersuits/PaxDuviricus/PaxDuviricus (Kullervo)
				(then
					(local.set $health_add (i32.shl (local.get $health_add) (i32.const 1)))
					(local.set $armor_add (local.get $shield_add))
					(local.set $shield_add (i32.const 0))
					(br $ifs)
					)
				)

			(if
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 965830671)) ;; /Lotus/Powersuits/Pagemaster/Pagemaster (Dante)
					(i32.eq (local.get $uniqueName_joaat) (i32.const 1642557977)) ;; /Lotus/Powersuits/BrokenFrame/XakuPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 3646107259))) ;; /Lotus/Powersuits/BrokenFrame/BrokenFrame
					)
				(then
					(local.set $health_add ;; (rank + 2) // 3 * 9
						(i32.mul
							(i32.div_u
								(i32.add (local.get $rank) (i32.const 2))
								(i32.const 3)
								)
							(i32.const 9)
							)
						)
					(local.set $shield_add ;; (rank + 1) // 3 * 9
						(i32.mul
							(i32.div_u
								(i32.add (local.get $rank) (i32.const 1))
								(i32.const 3)
								)
							(i32.const 9)
							)
						)
					(local.set $power_add ;; rank // 3 * 7
						(i32.mul
							(i32.div_u (local.get $rank) (i32.const 3))
							(i32.const 7)
							)
						)
					(br $ifs)
					)
				)

			(if
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 2004528371)) ;; /Lotus/Powersuits/Nezha/NezhaPrime
					(i32.eq (local.get $uniqueName_joaat) (i32.const 1982107702)) ;; /Lotus/Powersuits/Nezha/Nezha
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 88197247))) ;; /Lotus/Powersuits/Berserker/ValkyrPrime
					(i32.or (i32.eq (local.get $uniqueName_joaat) (i32.const 3958444743))) ;; /Lotus/Powersuits/Berserker/Berserker
					)
				(then
					;; These frames get 5 shields every 3 levels instead of 10
					(local.set $shield_add (i32.shr_u (local.get $shield_add) (i32.const 1)))
					(br $ifs)
					)
				)

			(if
				(i32.eq (local.get $uniqueName_joaat) (i32.const 3996905518)) ;; /Lotus/Powersuits/Koumei/Koumei
				(then
					(local.set $power_add (i32.shl (local.get $power_add) (i32.const 1)))
					(br $ifs)
					)
				)

			(if ;; Hildryn
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 1425306212)) ;; /Lotus/Powersuits/IronFrame/IronFramePrime
					(i32.eq (local.get $uniqueName_joaat) (i32.const 2721942125)) ;; /Lotus/Powersuits/IronFrame/IronFrame
					)
				(then
					(local.set $power_add (i32.const 0))
					(local.set $shield_add ;; ((rank + 1) // 3 + rank // 3) * 25
						(i32.mul
							(i32.add
								(i32.div_u
									(i32.add
										(local.get $rank)
										(i32.const 1)
										)
									(i32.const 3)
									)
								(i32.div_u
									(local.get $rank)
									(i32.const 3)
									)
								)
							(i32.const 25)
							)
						)
					(br $ifs)
					)
				)

			(if ;; Nidus
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 3371719961)) ;; /Lotus/Powersuits/Infestation/InfestationPrime
					(i32.eq (local.get $uniqueName_joaat) (i32.const 285271570)) ;; /Lotus/Powersuits/Infestation/Infestation
					)
				(then
					(local.set $armor_add ;; (rank + 4) // 6 * 20
						(i32.mul
							(i32.div_u
								(i32.add (local.get $rank) (i32.const 4))
								(i32.const 6)
								)
							(i32.const 20)
							)
						)
					(local.set $shield_add (i32.const 0))
					(local.set $ability_strength ;; 1 + (rank + 3) // 6 * 0.03
						(f64.add
							(f64.const 1.0)
							(f64.mul
								(f64.convert_i32_u
									(i32.div_u
										(i32.add (local.get $rank) (i32.const 3))
										(i32.const 6)
										)
									)
								(f64.const 0.03)
								)
							)
						)
					(local.set $power_add ;; (rank + 1) // 6 * 10
						(i32.mul
							(i32.div_u
								(i32.add
									(local.get $rank)
									(i32.const 1)
									)
								(i32.const 6)
								)
							(i32.const 10)
							)
						)
					(local.set $heal_rate ;; 5 + rank // 6 * 2
						(i32.add
							(i32.const 5)
							(i32.mul
								(i32.div_u
									(local.get $rank)
									(i32.const 6)
									)
								(i32.const 2)
								)
							)
						)
					(br $ifs)
					)
				)

			(if
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 988908034)) ;; /Lotus/Powersuits/Alchemist/LavosPrime
					(i32.eq (local.get $uniqueName_joaat) (i32.const 2375671164)) ;; /Lotus/Powersuits/Alchemist/Alchemist
					)
				(then
					(local.set $health_add (i32.shl (local.get $health_add) (i32.const 1)))
					(local.set $armor_add (i32.shl (local.get $power_add) (i32.const 1)))
					(local.set $power_add (i32.const 0))
					(br $ifs)
					)
				)

			(if
				(i32.or
					(i32.eq (local.get $uniqueName_joaat) (i32.const 2711843706)) ;; /Lotus/Powersuits/EntratiMech/NechroTech
					(i32.eq (local.get $uniqueName_joaat) (i32.const 2409869244)) ;; /Lotus/Powersuits/EntratiMech/ThanoTech
					)
				(then
					(local.set $health_add (i32.mul (local.get $health_add) (i32.const 10)))
					(local.set $shield_add (i32.shl (local.get $shield_add) (i32.const 1)))
					(br $ifs)
					)
				)
			)

		(local.get $health_add)
		(local.get $shield_add)
		(local.get $power_add)
		(local.get $armor_add)
		(local.get $ability_strength)
		(local.get $heal_rate)
		)
)
